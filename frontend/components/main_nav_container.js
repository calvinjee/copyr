import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dropdownModal, closeModal } from '../actions/modal_actions';
import MainNav from './main_nav';

const mapStateToProps = (state) => {
  return {
    dropdown: state.ui.dropdown,
    formOpen: state.ui.postType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dropdownModal: (dropdown) => dispatch(dropdownModal(dropdown)),
    closeModal: (dropdown) => dispatch(closeModal(dropdown)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav));
