import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import './assets/icons/utility-sprite/svg/symbols.svg';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// Redux
import configureStore, { history } from './redux/store';

// Higher Order Components
import { connectAsAnonymous } from './redux/connectors';

// Routes
import App from './App';
import NotFound from './pages/NotFound';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={connectAsAnonymous(App)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
