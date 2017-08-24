import React from 'react';
import { connect } from 'react-redux';
import { requestAllPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { postsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    posts: postsArray(state.entities.posts)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPosts: () => dispatch(requestAllPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
