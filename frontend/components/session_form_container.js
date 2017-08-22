import React from 'react';
import { signup, login } from '../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname === '/login' ? 'Log In' : 'Sign Up';
  return {
    errors: state.session.errors,
    formType: formType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname === '/login' ? login : signup;
  return {
    processForm: (user) => dispatch(action(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
