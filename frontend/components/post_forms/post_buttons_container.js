import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import PostButtons from './post_buttons';
import { textModal } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen,
    postType: state.ui.postType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    textModal: () => dispatch(textModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostButtons);
