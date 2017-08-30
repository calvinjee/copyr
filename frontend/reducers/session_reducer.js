import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS,
  CLEAR_ON_LOGOUT } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, REMOVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = { currentUser: null, errors: [] };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser, errors: [] } );
    case CLEAR_ON_LOGOUT:
        return defaultState;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors} );
    case RESET_ERRORS:
      return merge({}, state, { errors: [] });
    default: return state;
  }
};

export default sessionReducer;
