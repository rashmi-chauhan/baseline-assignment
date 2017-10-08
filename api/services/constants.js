module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS: {
    URL: process.env.REDIS_URL,
    USER_SESSIONS_DB: process.env.REDIS_USER_SESSIONS_DB
  }
};
