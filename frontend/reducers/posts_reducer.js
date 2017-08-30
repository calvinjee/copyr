import { RECEIVE_ALL_POSTS,
  RECEIVE_FIVE_POSTS,
  RECEIVE_SINGLE_POST,
  REMOVE_POST } from '../actions/post_actions';
import { LIKE_POST, UNLIKE_POST } from '../actions/like_actions';
import { merge } from 'lodash';


const postsReducer = (state = {}, action) => {
  let newState, post;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_SINGLE_POST:
      // return merge({}, state, { action.post.id: action.post })
      post = action.post;
      newState = merge({}, state);
      newState[post.id] = post;
      return newState;
    case LIKE_POST:
      post = action.post;
      newState = merge({}, state);
      newState[post.id] = post;
      return newState;
    case UNLIKE_POST:
      post = action.post;
      newState = merge({}, state);
      newState[post.id] = post;
      return newState;
    case REMOVE_POST: {
      newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
      }
      // TODO: make sure to remove post ids from liked post ids elsewhere in state
    default: return state;
  }
};

export default postsReducer;
