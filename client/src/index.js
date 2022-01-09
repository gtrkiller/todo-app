import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Auth0Provider } from "@auth0/auth0-react";
import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Auth0Provider store = {store}
    domain="dev-xu55kl4z.us.auth0.com"
    clientId="gR3qBQFhZh1ZbuV3gtwYEiTtZ7AtFdOG"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  </Provider>,

  document.getElementById('root'),
);
