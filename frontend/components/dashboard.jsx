import React from 'react';
import MainNavContainer from './main_nav_container';
import PostButtonsContainer from './post_forms/post_buttons_container';
import PostIndexContainer from './feed/post_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="everywhere">
        <h2>Hey {this.props.currentUser.username}</h2>
        <MainNavContainer />
        <PostButtonsContainer />
        <PostIndexContainer />
      </div>
    );
  }
}

export default Dashboard;
