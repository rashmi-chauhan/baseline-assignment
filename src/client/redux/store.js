import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

function baselineMiddleware() {
  // Disables redux-logger in prod
  if (process.env.REACT_APP_REDUX_LOGGING_ENABLED === 'false') {
    return applyMiddleware(thunkMiddleware);
  }

  return compose(applyMiddleware(thunkMiddleware, createLogger()));
}

export default initialState => {
  const enhancers = composeWithDevTools(baselineMiddleware());
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};