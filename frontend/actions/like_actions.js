import * as APIUtil from '../util/likes_util';
import { receiveErrors } from './session_actions';

export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';

export const receiveLike = (payLoad) => {
  return {
    type: LIKE_POST,
    post: payLoad.post,
  };
};

export const removeLike = (payLoad) => {
  return {
    type: UNLIKE_POST,
    post: payLoad.post,
  };
};

export const likePost = (postId) => {
  return (dispatch) => {
    return APIUtil.likePost(postId)
      .then(
        (payLoad) => { return dispatch(receiveLike(payLoad)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const unlikePost = (postId) => {
  return (dispatch) => {
    return APIUtil.unlikePost(postId)
      .then(
        (payLoad) => { return dispatch(removeLike(payLoad)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
