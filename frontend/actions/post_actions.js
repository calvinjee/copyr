import * as APIUtil from '../util/posts_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_FIVE_POSTS = 'RECEIVE_FIVE_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';
export const REMOVE_POST = 'REMOVE_POST';

// regular actions
export const receiveAllPosts = (payLoad) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts: payLoad.posts,
    users: payLoad.users,
    followedPostIds: payLoad.followedPostIds,
    curUserPostIds: payLoad.curUserPostIds,
    likedPostIds: payLoad.likedPostIds,
    recommendedUserIds: payLoad.recommendedUserIds,
  };
};

// export const receiveFivePosts = (posts) => {
//   return {
//     type: RECEIVE_FIVE_POSTS,
//     posts: posts,
//   };
// };

export const receiveSinglePost = (payLoad) => {
  return {
    type: RECEIVE_SINGLE_POST,
    post: payLoad.post,
    user: payLoad.user,
  };
};

export const removePost = (post) => {
  return {
    type: REMOVE_POST,
    post: post,
  };
};

// thunk actions
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
    return APIUtil.fetchSinglePost(id)
      .then(
        (post) => { return dispatch(receiveSinglePost(post)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    return APIUtil.createPost(post)
      .then(
        (newPost) => { return dispatch(receiveSinglePost(newPost)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const revisePost = (post) => {
  return (dispatch) => {
    return APIUtil.updatePost(post)
      .then(
        (updatedPost) => { return dispatch(receiveSinglePost(updatedPost)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return APIUtil.destroyPost(id)
      .then(
        (deletedPost) => { return dispatch(removePost(deletedPost)); },
        (errors) => { return dispatch(receiveErrors(errors)); }
      );
  };
};
