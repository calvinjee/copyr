import React from 'react';
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
