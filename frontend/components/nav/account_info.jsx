import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { dropdownModal, closeModal } from '../../actions/modal_actions';

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(this.props.history.push("/"));
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

export default connect(null, mapDispatchToProps)(AccountInfo);

// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { logout } from '../../actions/session_actions';
// import { dropdownModal, closeModal } from '../../actions/modal_actions';
//
// class AccountInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { search: '' };
//     this.handleLogout = this.handleLogout.bind(this);
//     this.showDropdown = this.showDropdown.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }
//
//   // componentWillUnmount() {
//   //   document.removeEventListener('click', this.closeModal);
//   // }
//
//   showDropdown(dropdown) {
//
//     return (e) => {
//       this.props.dropdownModal(dropdown);
//       document.addEventListener('click', this.closeModal);
//     };
//   }
//
//   handleLogout(e) {
//     e.preventDefault();
//     this.props.logout().then(this.props.history.push("/"));
//   }
//
//   closeModal(e) {
//
//     if (this.node.contains(e.target)) {
//       return;
//     }
//
//     this.props.closeModal();
//     document.removeEventListener('click', this.closeModal);
//   }
//
//   render () {
//     return (
//       <div>
//         <div
//           onClick={this.showDropdown('accountinfo')}
//           className="ai">
//           AI</div>
//         <div
//           ref={node => { this.node = node; }}
//           className={this.props.dropdown === 'accountinfo' ?
//           "account-info" :
//           "hidden"}>
//           <div className="aiheader">
//             <p>ACCOUNT</p>
//             <button
//               className="logout"
//               onClick={this.handleLogout}>
//               Logout</button>
//           </div>
//           <ul>
//             <li><span>Likes</span></li>
//             <li><span>Following</span></li>
//             <li><span>My Posts</span></li>
//             <li><span>My Followers</span></li>
//           </ul>
//         </div>
//       </div>
//
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     dropdown: state.ui.dropdown
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout()),
//     dropdownModal: (dropdown) => dispatch(dropdownModal(dropdown)),
//     closeModal: (dropdown) => dispatch(closeModal(dropdown)),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
