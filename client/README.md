# Client-side Development

## Overview

The ADS Webapp Baseline scaffold offers fully server-side rendered React SPA's via [Next.js](https://www.npmjs.org/next).  The baseline itself is a unified Express application that happens to scaffold a Next.js application segmented under this `/client` folder, completely separate from any traditional Server-side Development, such as developing RESTful API's.

## Libraries Used

* [Next.js](https://www.npmjs.org/next): React.js scaffold with built-in developer tooling and server-side rendering
* [Redux](https://www.npmjs.org/redux): App-wide/shared state management
* [redux-thunk](https://www.npmjs.org/redux-thunk): Asynchronous side-effects for Redux
* [redux-logger](https://www.npmjs.org/redux-loger): Debugging tool for Redux

## Unit Testing

Note that unit tests will execute any code in `/client` or `/server` with a `.test.js` extension.

* **One-time Run/CI**: `yarn test`
* **Continuous Run/Local Development**: `yarn run test:watch`

## Development

See [Next.js documentation](https://www.npmjs.org/next) for details on client development
