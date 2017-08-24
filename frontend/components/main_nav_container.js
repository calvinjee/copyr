import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import MainNav from './main_nav';

const mapStateToProps = (state) => {
  return {
    something: 'pass down state to display search results'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    something: 'fetch some number of posts based on search'
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
