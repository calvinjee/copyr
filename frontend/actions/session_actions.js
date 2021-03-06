import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';
export const CLEAR_ON_LOGOUT = 'CLEAR_ON_LOGOUT';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
};

export const clearOnLogout = () => {
  return {
    type: CLEAR_ON_LOGOUT,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON,
  };
};

export const resetErrors = () => {
  return {
    type: RESET_ERRORS,
  };
};

//thunk actions
export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(
        (currentUser) => { return dispatch(receiveCurrentUser(currentUser)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(
        (currentUser) => { return dispatch(receiveCurrentUser(currentUser)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout()
      .then(
        () => { return dispatch(clearOnLogout()); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
