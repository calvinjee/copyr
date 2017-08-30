import * as APIUtil from '../util/likes_util';
import { receiveErrors } from './session_actions';

export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';

export const receiveLike = (like) => {
  return {
    type: LIKE_POST,
  };
};

export const removeLike = (like) => {
  return {
    type: UNLIKE_POST,
  };
};

export const likePost = (postId) => {
  return (dispatch) => {
    return APIUtil.likePost(postId)
      .then(
        (like) => { return dispatch(receiveLike(like)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const unlikePost = (postId) => {
  return (dispatch) => {
    return APIUtil.likePost(postId)
      .then(
        (like) => { return dispatch(removeLike(like)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
