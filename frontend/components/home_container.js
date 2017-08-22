import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Home from './home';
import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
