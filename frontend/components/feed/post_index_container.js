import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { requestAllPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { postsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  
  return {
    currentUser: state.session.currentUser,
    posts: postsArray(state.entities.posts, state.dashboard),
    users: state.entities.users,
    postType: state.ui.postType,
    editPostId: state.ui.editPostId,
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
