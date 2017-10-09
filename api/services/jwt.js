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

  // Persist the refresh token to redis
  // This allows for a quick mechanism to verify that we issued it and also
  // a way to quickly expire all refresh tokens in the event of a breach
  let refreshTokenPayload = {...payload, created_at: new Date()};
  let refreshToken = jwt.sign(refreshTokenPayload, process.env.JWT_SECRET);
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