import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { addPost, revisePost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    revisePost: (post) => dispatch(revisePost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
