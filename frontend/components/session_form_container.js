import React from 'react';
import { signup, login, resetErrors } from '../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.form === 'login' ? 'Log In' : 'Sign Up';
  return {
    errors: state.session.errors,
    formType: formType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.form === 'login' ? login : signup;
  return {
    processForm: (user) => dispatch(action(user)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
