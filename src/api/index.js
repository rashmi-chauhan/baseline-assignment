import winston from 'winston';
import SwaggerExpress from 'swagger-express-mw';
import bodyParser from 'body-parser';
import yaml from 'js-yaml';
import Promise from 'bluebird';
import path from 'path';

// NOTE: Need to manually import controllers since they are referenced indirectly and the build pipeline
// has no idea they exist without imports
import './controllers/hello_world';

// Promisify Swagger
Promise.promisifyAll(SwaggerExpress);

let config = {
  appRoot: path.join(__dirname, '..') // required config
};

export default async function api(app) {
  const swaggerExpress = await SwaggerExpress.createAsync(config);
  swaggerExpress.register(app);
  return app;
}
