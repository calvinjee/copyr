import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, REMOVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = { currentUser: null, errors: [], feedPostIds: [] };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser, errors: [] } );
    case RECEIVE_ALL_POSTS:
      return merge({}, state, { feedPostIds: action.feedPostIds });
    case RECEIVE_SINGLE_POST:
      newState = merge({}, state);
      newState.feedPostIds.push(action.post.id);
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      let idx = newState.feedPostIds.indexOf(action.post.id);
      if (idx > -1) {
        newState.feedPostIds.splice(idx, 1);
      }
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors} );
    case RESET_ERRORS:
      return merge({}, state, { errors: [] });
    default: return state;
  }
};

export default sessionReducer;
