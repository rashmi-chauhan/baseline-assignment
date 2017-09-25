import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const reduxDebuggingEnabled =
  process.env.REACT_APP_REDUX_DEBUGGING_ENABLED === 'true';

function baselineMiddleware() {
  // Disables redux-logger in prod
  if (!reduxDebuggingEnabled) {
    return applyMiddleware(thunkMiddleware);
  }

  return compose(applyMiddleware(thunkMiddleware, createLogger()));
}

export default initialState => {
  const enhancers = reduxDebuggingEnabled
    ? composeWithDevTools(baselineMiddleware())
    : baselineMiddleware();
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};
