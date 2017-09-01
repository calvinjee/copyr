import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
