import React from 'react';
import RecentActivity from './recent_activity';
import AccountInfo from './account_info';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(form) {
    return (e) => {
      e.preventDefault();
      // TODO: put something here
    };
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  render () {
    // const errors = this.props.errors.map((error, idx) => {
    //   return (<p key={idx}>{error}</p>);
    // });

    return (
      <div className="main-nav">
        <h3 className="nav-logo main-nav-logo">c</h3>
        <input
            className="search"
            placeholder="Search Copyr"
            value={this.state.search}
            onChange={this.handleChange('search')} />
          <Link to="/dashboard">
            <button className="home-dashboard" />
          </Link>
          <RecentActivity />
          <AccountInfo />
          <button className="compose" />
          <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default MainNav;
