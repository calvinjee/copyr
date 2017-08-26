import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { addPost, revisePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    modalOpen: state.ui.modalOpen,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    revisePost: (post) => dispatch(revisePost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
