import React from 'react';
import RecentActivity from './recent_activity';
import AccountInfo from './nav/account_info';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(this.props.history.push("/"));
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  render () {
    return (
      <div className="main-nav">
        <h3 className="nav-logo main-logo">c</h3>
        <p>icon</p>
        <input
            type="text"
            className="search"
            placeholder="Search Copyr"
            value={this.state.search}
            onChange={this.handleChange('search')} />
        <div className="main-nav-icons">
          <Link to="/dashboard">
            <p>Home</p>
            </Link>
          <RecentActivity />
          <AccountInfo />
          <p>compose</p>
        </div>
      </div>
    );
  }
}

export default MainNav;
