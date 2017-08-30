import { RECEIVE_ALL_POSTS,
  RECEIVE_FIVE_POSTS,
  RECEIVE_SINGLE_POST,
  REMOVE_POST } from '../actions/post_actions';
import { CLEAR_ON_LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.users);
    case RECEIVE_SINGLE_POST:
      const user = action.user;
      let newState = merge({}, state);
      newState[user.id] = user;
      return newState;
    case CLEAR_ON_LOGOUT: return {};
    default: return state;
  }
};

export default usersReducer;
