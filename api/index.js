const winston = require('winston');
const SwaggerExpress = require('swagger-express-mw');
const bodyParser = require('body-parser');
const yaml = require('js-yaml');
const Promise = require('bluebird');
const path = require('path');

// Promisify Swagger
Promise.promisifyAll(SwaggerExpress);

module.exports = api;

let config = {
  appRoot: path.join(__dirname, '..'),
  configDir: path.join(__dirname, './config')
};

async function api(app) {
  const swaggerExpress = await SwaggerExpress.createAsync(config);
  swaggerExpress.register(app);
  return app;
}
