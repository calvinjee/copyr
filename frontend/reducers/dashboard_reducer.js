import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS,
  CLEAR_ON_LOGOUT } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, REMOVE_POST } from '../actions/post_actions';
import { LIKE_POST, UNLIKE_POST } from '../actions/like_actions';
import { merge } from 'lodash';

const defaultState = {
  followedPostIds: [],
  curUserPostIds: [],
  likedPostIds: [],
  followerIds: [],
  followingUserIds: [],
  recommendedUserIds: [],
  radarPostId: null,
};

const dashboardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState, idx;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return state;
    case RECEIVE_ALL_POSTS:
      return merge({}, state, {
        followedPostIds: action.followedPostIds,
        curUserPostIds: action.curUserPostIds,
        likedPostIds: action.likedPostIds,
      });
    case RECEIVE_SINGLE_POST:
      newState = merge({}, state);
      idx = newState.curUserPostIds.indexOf(action.post.id);
      if (idx === -1) {
        newState.curUserPostIds.push(action.post.id);
      }
      return newState;
    case LIKE_POST:
      newState = merge({}, state);
      newState.likedPostIds.push(action.post.id);
      return newState;
    case UNLIKE_POST:
      newState = merge({}, state);
      idx = newState.likedPostIds.indexOf(action.post.id);
      if (idx > -1) {
        newState.likedPostIds.splice(idx, 1);
      }
    return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      idx = newState.curUserPostIds.indexOf(action.post.id);
      if (idx > -1) {
        newState.curUserPostIds.splice(idx, 1);
      }
      return newState;
    case CLEAR_ON_LOGOUT:
      return defaultState;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors} );
    case RESET_ERRORS:
      return merge({}, state, { errors: [] });
    default: return state;
  }
};

export default dashboardReducer;
