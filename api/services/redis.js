const Promise = require('bluebird');
const redis = require('redis');
const { REDIS } = require('./constants');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient({
  url: `${REDIS.URL}`
});

module.exports = {
  userSessions: async () => {
    return await redisClient.selectAsync(REDIS.USER_SESSIONS_DB);
  }
};
