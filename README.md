# ads-webapp-baseline

* [Live Demo - Dev Mode](https://ads-webapp-baseline-dev.herokuapp.com)
* [Live Demo - Production Mode](https://ads-webapp-baseline-stg.herokuapp.com)

## Overview

This is the baseline for ADS' fully universal JavaScript web application.  It is meant to be a fast track for new client applications and comes built in with Heroku support.

## Goals

1. **Fully universal JavaScript**: Coding style mostly similar on the back-end and front-end
2. **Keep developers in a flow**: Hot or live reloading must be built-in
3. **Consistent approach to Authentication**: All authentication must be built-in to the back-end with little or no reliance on 3rd party services
4. **Consistent front-end patterns**: Basics like routing, state management, and unit testing should already be built-in so a team can get up and go quickly
5. **Consistent back-end patterns**: Basics like ORM's, query builders, middleware, route config, and unit testing should already be built in so a team can get up and go quickly
6. **Brainless Heroku and 12FA support**: All things needed for quick Heroku deployments should already be baked in, including good 12FA patterns (specifically, environment variable-driven apps)
7. **Consistent code styling**: Automated code formatting and warnings for anti-patterns built-in

## Prerequisites

1. Node v8 or higher ([Node Version Manager](https://github.com/creationix/nvm) highly recommended)
1. [Docker](https://www.docker.com/)
    * **NOTE**: Docker is only used for fast local scaffolding and is not used by the release process
1. At the root of this repo, execute `docker-compose build`

## Running and Debugging

1. `docker-compose up`
    * **Note**: This will take a minute or two as dependencies are built out fresh in a container
1. Open `http://localhost:64002` in a browser for the React SPA
   * **Note**: Any changes in `src` will reflect in your Docker container automatically
1. Open `http://localhost:64003` in Postman for the Web API
    * **Note**: Any changes in `api` will reflect in your Docker container automatically
1. To debug the Web API, attach your favorite Node Editor/IDE's debugger to `localhost:64004`
1. To stop all the code and infrastructure, press Ctrl + C
1. To delete all of the infrastructure and start from scratch, at the root of this repo, execute `docker-compose down && docker-compose up`

## Ongoing Development

This scaffold is completely containerized in Docker, meaning you do not have to worry about any local dependencies apart from Docker and VS Code.

However, there is one caveat.  If you add any new dependencies to `package.json` for either the server or client-side, be sure to execute a new `docker-compose build` and then `docker-compose up` to have the container reflect the new dependencies.

The reason for this is that certain binary-based distributions, such as `bcrypt` and `node-sass`, will only build for their specific platform.  To counteract this and keep the container isolated, we simply mount the source code folders from your host to the container and ignore `node_modules`.

## Sample VS Code Debugger Configuration

```json
{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach to Nodemon",
            "type": "node",
            "request": "attach",
            "port": 63004,
            "address": "localhost",
            "remoteRoot": "/app",
            "localRoot": "${workspaceRoot}",
            "protocol": "inspector",
            "restart": true
        }
    ]
}
```

## Developing

* [Client-side Development]()
* [Server-side Development]()

## Unit Testing

**Convention**: Only files with a `.test.js` extension will be run by Jest

* **One-time Tests Run**: `yarn test`
* **Live-Reloading Unit Tests**: `yarn run test:watch`

## Architecture

### Front-end (/src/client)

* [create-react-app](https://github.com/facebookincubator/create-react-app): The Facebook standard React scaffolder
* [Redux](https://www.npmjs.org/redux): App-wide/shared state management
* [redux-thunk](https://www.npmjs.org/redux-thunk): Asynchronous side-effects for Redux
* [redux-logger](https://www.npmjs.org/redux-loger): Debugging tool for Redux

### Back-end (/src/api)

* [Express](https://www.npmjs.org/express): Web framework
* [Bluebird](https://www.npmjs.org/bluebird): Promise library
* [body-parser](https://www.npmjs.org/body-parser): Express plugin for parsing different types of content
* [cors](https://www.npmjs.org/cors): Express plugin for handling CORS requests
* [bcrypt](https://www.npmjs.org/bcrypt): Practical encryption for data at rest
* [jsonwebtoken](https://www.npmjs.org/jsonwebtoken): Creation and management of JWT's
* [passport](https://www.npmjs.org/passport): Authentication middleware for Express
* [passport-saml](https://www.npmjs.org/passport-saml): SAML plugin for Passport
* [passport-oauth](https://www.npmjs.org/passport-oauth): OAuth plugin for Passport
* [sequelize](https://www.npmjs.org/sequelize): Code-first ORM
* [knex](https://www.npmjs.org/knex): Query builder for databases
* [winston](https://www.npmjs.org/winston): Application logging
* [redis](https://www.npmjs.org/redis): Redis client
* [pg](https://www.npmjs.org/pg): Postgres client

### Common

* [moment](https://www.npmjs.org/moment): Date parsing and formatting library
* [dotenv](https://www.npmjs.org/dotenv): .env file support

### Unit Testing, Code Quality, and DevOps

* [prettier](https://www.npmjs.org/prettier): Opinionated JavaScript code styling
* [husky](https://www.npmjs.org/husky): Pre-commit Git Hooks
* [lint-staged](https://www.npmjs.org/lint-staged): Runs prettier on every staged commit
* [jest](https://www.npmjs.org/jest): Unit testing framework
* [enzyme](https://www.npmjs.org/enzyme): React.js testing utilities
* [react-test-renderer](https://www.npmjs.org/react-test-renderer): React.js testing helpers


