import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
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
        () => { return dispatch(receiveCurrentUser(null)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

// export const updateUser = (currentUser) => {
//   return (dispatch) => {
//     return APIUtil.updateUser(currentUser)
//       .then(
//         (updatedUser) => { return dispatch(receiveCurrentUser(updatedUser)); },
//         (errors) => { return dispatch(receiveErrors(errors)); }
//       );
//   };
// };
