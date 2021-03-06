import React from 'react';
import { connect } from 'react-redux';
import PostButtons from './post_buttons';
import { postFormModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen,
    postType: state.ui.postType,
    editPostId: state.ui.editPostId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postFormModal: (postType) => dispatch(postFormModal(postType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostButtons);
