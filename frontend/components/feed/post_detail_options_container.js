import React from 'react';
import { connect } from 'react-redux';
import PostDetailOptions from './post_detail_options';
import { deletePost, revisePost  } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    post: ownProps.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    revisePost: (post) => dispatch(revisePost(post)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostDetailOptions);
