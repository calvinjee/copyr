import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import * as APIUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
import { openModal } from './actions/modal_actions';


window.openModal = openModal;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.CurrentUser) {
    let preloadedState = { session: { currentUser: window.CurrentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //

  ReactDOM.render(<Root store={store} />, root);
});
