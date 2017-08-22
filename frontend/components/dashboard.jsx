import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Hey {this.props.currentUser.username}</h2>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Dashboard;
