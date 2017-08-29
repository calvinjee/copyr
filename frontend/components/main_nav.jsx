import React from 'react';
import RecentActivity from './recent_activity';
import AccountInfo from './nav/account_info';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  showDropdown(dropdown) {
    return (e) => {
      this.props.dropdownModal(dropdown);
    };
  }

  closeModal(e) {
    this.props.closeModal();
  }

  render () {
    const formOpen = this.props.formOpen ? 'nav-nofix' : null;

    return (
      <div className={`main-nav ${formOpen}`}>
        <h3 className="nav-logo main-logo">c</h3>
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        <input
            type="text"
            className="search"
            placeholder="Search Copyr"
            value={this.state.search}
            onChange={this.handleChange('search')} />
        <div className="main-nav-icons">

          <Link to="/dashboard">
            <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
          <i className="fa fa-compass" aria-hidden="true"></i>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <i className="fa fa-bolt" aria-hidden="true"></i>
          <RecentActivity />
          <div
            onClick={this.showDropdown('accountinfo')}
            className="ai">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="ai-dropdown">
            <AccountInfo dropdown={this.props.dropdown} />
          </div>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div
          className={(this.props.dropdown === 'accountinfo') ?
            "dropdown-modal" :
            "hidden"}
          onClick={this.closeModal} />
      </div>
    );
  }
}

export default MainNav;
