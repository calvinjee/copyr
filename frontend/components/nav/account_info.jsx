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
    this.props.logout();
    this.props.history.push("/");
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
          <li>
            <i className="fa fa-heart fa-heart-ai" aria-hidden="true"></i>
            <span>Likes</span>
            <div className="ai-count">
              <span>{this.props.likedPostIds.length}</span>
            </div>
          </li>
          <li>
            <i className="fa fa-address-book" aria-hidden="true"></i>
            <span>Following</span>
            <div className="ai-count">
              <span>{this.props.followedUserIds.length}</span>
            </div>
          </li>
          <li>
            <i className="fa fa-sticky-note" aria-hidden="true"></i>
            <span>My Posts</span>
            <div className="ai-count">
              <span>{this.props.curUserPostIds.length}</span>
            </div>
          </li>
          <li>
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            <span>My Followers</span>
            <div className="ai-count">
              <span>{this.props.followerIds.length}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    likedPostIds: state.dashboard.likedPostIds,
    followedUserIds: state.dashboard.followedUserIds,
    curUserPostIds: state.dashboard.curUserPostIds,
    followerIds: state.dashboard.followerIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountInfo));
