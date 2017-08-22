import React from 'react';
import ReactDOM from 'react-dom';

//testing
import * as APIUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<h1>copyr</h1>, root);
});
