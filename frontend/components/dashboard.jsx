import React from 'react';
import MainNavContainer from './main_nav_container';
import PostButtonsContainer from './post_forms/post_buttons_container';
import TextForm from './post_forms/text_form';

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

    return (
      <div className="everywhere">
        <h2>Hey {this.props.currentUser.username}</h2>
        <MainNavContainer />
        <PostButtonsContainer />
      </div>
    );
  }
}

export default Dashboard;
