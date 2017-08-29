import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { dropdownModal, closeModal } from '../../actions/modal_actions';

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      debugger
      this.props.history.push("/");
    });
  }

  render () {
    return (
      <div
        className={this.props.dropdown === 'accountinfo' ?
          "account-info" :
          "hidden"}>
        <div className="aiheader">
          <p>ACCOUNT</p>
          <button
            className="logout"
            onClick={this.handleLogout}>
            Log out</button>
        </div>
        <ul className="ai-list">
          <li><span>Likes</span></li>
          <li><span>Following</span></li>
          <li><span>My Posts</span></li>
          <li><span>My Followers</span></li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(AccountInfo));
