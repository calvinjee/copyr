import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export default entitiesReducer;
