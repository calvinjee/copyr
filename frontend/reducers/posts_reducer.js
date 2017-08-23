import { RECEIVE_ALL_POSTS,
  RECEIVE_FIVE_POSTS,
  RECEIVE_SINGLE_POST,
  REMOVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';


const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_SINGLE_POST:
      const post = action.post;
      return merge({}, state, { post });
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
      // TODO: make sure to remove post ids from liked post ids elsewhere in state
    default: return state;
  }
};

export default postsReducer;
