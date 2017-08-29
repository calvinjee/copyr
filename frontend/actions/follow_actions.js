import * as APIUtil from '../util/follow_util';
import { receiveErrors } from './session_actions';

// export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
// export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
//
// export const receiveFollow = () => {
//   return {
//     type: RECEIVE_FOLLOW,
//   };
// };
//
// export const removeFollow = () => {
//   return {
//     type: REMOVE_FOLLOW,
//   };
// };

export const createFollow = (followeeId) => {
  return (dispatch) => {
    return APIUtil.createFollow(followeeId)
      .then(
        null,
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const deleteFollow = (followeeId) => {
  return (dispatch) => {
    return APIUtil.destroyFollow(followeeId)
      .then(
        null,
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
