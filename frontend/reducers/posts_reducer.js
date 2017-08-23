import RECEIVE_ALL_POSTS from '../actions/post_actions';
import RECEIVE_FIVE_POSTS from '../actions/post_actions';
import RECEIVE_SINGLE_POST from '../actions/post_actions';
import { merge } from 'lodash';


const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_SINGLE_POST:
      const post = action.post;
      return merge({}, state, { post });
    default: return state;
  }
};

export default postsReducer;
