// import RECEIVE_ALL_POSTS from '../actions/post_actions';
// import RECEIVE_FIVE_POSTS from '../actions/post_actions';
// import RECEIVE_SINGLE_POST from '../actions/post_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.types) {
    default: return state;
  }
};

export default usersReducer;
