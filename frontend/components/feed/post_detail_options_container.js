import React from 'react';
import { connect } from 'react-redux';
import PostDetailOptions from './post_detail_options';
import { deletePost, revisePost  } from '../../actions/post_actions';
import { dropdownModal, closeModal, postFormModal  } from '../../actions/modal_actions';
import { likePost, unlikePost  } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    dropdown: state.ui.dropdown,
    postType: state.ui.postType,
    editPostId: state.ui.editPostId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    revisePost: (post) => dispatch(revisePost(post)),
    dropdownModal: (dropdown, editPostId) => dispatch(dropdownModal(dropdown, editPostId)),
    closeModal: (dropdown) => dispatch(closeModal(dropdown)),
    postFormModal: (postType, editPostId) => dispatch(postFormModal(postType, editPostId)),
    likePost: (postId) => dispatch(likePost(postId)),
    unlikePost: (postId) => dispatch(unlikePost(postId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailOptions);
