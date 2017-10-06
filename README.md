# ads-webapp-baseline

* [Live Demo - Dev Mode](https://ads-webapp-baseline-dev.herokuapp.com)
* [Live Demo - Production Mode](https://ads-webapp-baseline-stg.herokuapp.com)

## Overview

This is the baseline for ADS' fully universal JavaScript web application.  It is meant to be a fast track for new client applications and comes built in with Heroku support.

## Goals

1. **Developers onboarded in 15 minutes or less**: No worries about dependency installs or stacks of dev machine setup manuals. Just get up and go.
1. **Keep developers in a flow**: Hot or live reloading must be built-in
1. **Consistent approach to Authentication**: All authentication must be built-in to the back-end with little or no reliance on 3rd party services
1. **Consistent back-end patterns**: Basics like ORM's, query builders, middleware, route config, and unit testing should already be built in so a team can get up and go quickly
1. **Brainless Heroku and 12FA support**: All things needed for quick Heroku deployments should already be baked in, including good 12FA patterns (specifically, environment variable-driven apps)
1. **Consistent code styling**: Automated code formatting and warnings for anti-patterns built-in

## Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/)
1. [Docker](https://www.docker.com/)
1. At the root of this repo, execute `docker-compose build`

## Quick Setup

1. At the root of this repo, execute `docker-compose up`
1. Once you see your container running as indicated by the message `LOG: database system is ready to accept connections`, execute `docker exec -i -t ads_webapp_baseline /bin/bash` to open a bash into the container
1. Execute `yarn run develop:docker` in the bash of the container
1. Open `http://localhost:64003/api/hello?name=me` in a browser for the Web API
   * **Note**: Any changes in `api` will reflect in your Docker container automatically thanks to Nodemon
1. To debug the Web API, attach your favorite Node Editor/IDE's debugger to `localhost:64004`
1. Open `http://localhost:64002` for the `create-react-app` dev server
1. Open `http://localhost:64005` for the Swagger Project Editor
1. To stop all the code and infrastructure, press Ctrl + C
1. To delete all of the infrastructure and start from scratch, at the root of this repo, execute `docker-compose down && docker-compose up`

## Features

This scaffold is completely containerized in Docker, meaning you do not have to worry about any local dependencies apart from Docker and VS Code.

We expose ports on the container to allow the best of both worlds: isolated and consistent container development with the convenience of local development.

### NPM Tasks

* **yarn run develop:docker**: Executes the `develop` and `test:watch` tasks in parallel
* **yarn run develop:api**: Executes Nodemon (exposing Node Debugger to the container's port 5858) of your server code
* **yarn run develop:client**: Starts the create-react-app dev server with Redux Debugging enabled
* **yarn run swagger:edit**: Runs Swagger Project Editor on the container's port 3002
* **yarn test**: Single run of Jest on any `*.test.js* unit test file
* **yarn run test:watch**: Runs an ongoing, live reloading Jest test watcher for any `*.test.js` unit test file

### Adding New Dependencies

Your container is the source of your code going forward.  While it has a localized `node_modules` on both server and client to prevent platform-specific compilation problems (with things like `bcrypt`), you can still manage dependencies within and it will reflect on your local `package.json`.

To do this, you simply need to bash into the container by executing: `docker exec -i -t ads_webapp_baseline /bin/bash`.  This will open a terminal in the container running your code.  You can then add dependencies as normal, using `yarn add some_library`.

Note that you can execute this command in multiple _local_ terminals to achieve the same effect as having multiple bash terminals in a pure local setup.

To exit from the container's bash, simply execute `exit`

### Prettier

This scaffold comes with a `prettier` precommit Git hook.  In other words, your JS can be in whatever style you want as you develop.  When you stage your commits to git, `prettier` will automatically format your code to an opinionated standard.

## Troubleshooting

### ENOSPC Issues With Docker

If you are doing heavy development in Docker and aren't actively removing volumes, you might run into an ENOSPC problem when you execute `docker-compose build` or `docker-compose up`.  

To alleviate this, execute `docker volume rm $(docker volume ls -qf dangling=true)` in a Terminal then attempt to do another `docker-compose build` or `docker-compose up`.

This command deletes and "dangling" volumes -- that is, any volumes that are orphaned because of prior `docker-compose build` or container removals.

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


