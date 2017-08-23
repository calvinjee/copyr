import * as APIUtil from '../util/posts_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_FIVE_POSTS = 'RECEIVE_FIVE_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';

export const receiveAllPosts = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts: posts,
  };
};
//
// export const receiveFivePosts = (posts) => {
//   return {
//     type: RECEIVE_FIVE_POSTS,
//     posts: posts,
//   };
// };

export const receiveSinglePost = (post) => {
  return {
    type: RECEIVE_SINGLE_POST,
    post: post,
  };
};

export const requestAllPosts = () => {
  return (dispatch) => {
    return APIUtil.fetchAllPosts()
      .then(
        (posts) => { return dispatch(receiveAllPosts(posts)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const requestSinglePost = (id) => {
  return (dispatch) => {
    return APIUtil.fetchSinglePosts(id)
      .then(
        (post) => { return dispatch(receiveSinglePost(post)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
