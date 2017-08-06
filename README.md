# ads-webapp-baseline

[Live Demo](https://ads-webapp-baseline-dev.herokuapp.com)

## Overview

This is the baseline for ADS' fully universal JavaScript web application.  It is meant to be a fast track for new client applications and comes built in with Heroku support.

## Goals

1. *Fully universal JavaScript*: Coding style must be the same on the back-end and front-end
2. *Keep developers in a flow*: Hot or live reloading must be built-in
3. *Consistent approach to Authentication*: All authentication must be built-in to the back-end with little or no reliance on 3rd party services
4. *Consistent front-end patterns*: Basics like routing, state management, and unit testing should already be built-in so a team can get up and go quickly
5. *Consistent back-end patterns*: Basics like ORM's, query builders, middleware, route config, and unit testing should already be built in so a team can get up and go quickly
6. *Brainless Heroku and 12FA support*: All things needed for quick Heroku deployments should already be baked in, including good 12FA patterns (specifically, environment variable-driven apps)
7. *Consistent code styling*: Automated code formatting and warnings for anti-patterns built-in

## Architecture

### Front-end (/src/client)

* [Next.js](): React.js scaffold with built-in developer tooling and server-side rendering
* [Redux](): App-wide/shared state management
* [redux-thunk](): Asynchronous side-effects for Redux
* [redux-logger](): Debugging tool for Redux

### Back-end (/src/api)

* [Express](): Web framework
* [Bluebird](): Promise library
* [body-parser](): Express plugin for parsing different types of content
* [cors](): Express plugin for handling CORS requests
* [bcrypt](): Practical encryption for data at rest
* [jsonwebtoken](): Creation and management of JWT's
* [passport](): Authentication middleware for Express
* [passport-saml](): SAML plugin for Passport
* [passport-oauth](): OAuth plugin for Passport
* [sequelize](): Code-first ORM
* [knex](): Query builder for databases
* [winston](): Application logging
* [redis](): Redis client
* [pg](): Postgres client

### Common

* [moment](): Date parsing and formatting library
* [dotenv](): .env file support
