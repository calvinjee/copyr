import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Home from './home';
import { openModal, closeModal } from '../actions/modal_actions';
import { login } from '../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    // modalOpen: state.ui.modalOpen
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // openModal: () => dispatch(openModal()),
    // closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
