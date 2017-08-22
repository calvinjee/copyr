import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//testing
import * as APIUtil from './util/session_api_util';

window.createUser = APIUtil.createUser;
window.updateUser = APIUtil.updateUser;
window.login = APIUtil.login;
window.logout = APIUtil.logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore()
  ReactDOM.render(<h1>copyr</h1>, root);
});
