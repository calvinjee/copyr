import React from 'react';
import { connect } from 'react-redux';
import PostDetailOptions from './post_detail_options';
import { deletePost, revisePost  } from '../../actions/post_actions';
import { dropdownModal, closeModal, postFormModal  } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    dropdown: state.ui.dropdown,
    editPostId: state.ui.editPostId,
    editForm: state.ui.editForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    revisePost: (post) => dispatch(revisePost(post)),
    dropdownModal: (dropdown, editPostId) => dispatch(dropdownModal(dropdown, editPostId)),
    closeModal: (dropdown) => dispatch(closeModal(dropdown)),
    postFormModal: (postType, editForm) => dispatch(postFormModal(postType, editForm)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailOptions);
