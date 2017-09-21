import * as APIUtil from '../util/follows_util';
import { receiveErrors } from './session_actions';

export const followUser = (followeeId) => {
  return (dispatch) => {
    return APIUtil.createFollow(followeeId)
      .then(
        null,
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const unfollowUser = (followeeId) => {
  return (dispatch) => {
    return APIUtil.destroyFollow(followeeId)
      .then(
        null,
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
