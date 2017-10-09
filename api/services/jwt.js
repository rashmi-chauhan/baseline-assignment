const bluebird = require('bluebird');
const jwt = require('jsonwebtoken');
const redisService = require('../services/redis');
const {promisify} = require('util');
const verify = promisify(jwt.verify);
const { REDIS } = require('./constants');

module.exports = {
  sign,
  verifyToken
};

async function sign(payload) {
  let accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || `1d`
  });

  // Persist the refresh token to redis, this allows us an easy mechanism to expire all refresh tokens operationally
  let refreshToken = jwt.sign({refresh_token: true}, process.env.JWT_SECRET);
  let redisResult = await redisService.set(REDIS.REFRESH_TOKENS_DB, refreshToken, true);
  return {
    accessToken,
    refreshToken
  };
}

async function verifyToken(token) {
  let decoded = await jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}