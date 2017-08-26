import React from 'react';
import MainNavContainer from './main_nav_container';
import PostButtonsContainer from './post_forms/post_buttons_container';
import PostIndexContainer from './feed/post_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const avatar = { backgroundImage: `url(${this.props.currentUser.image_url})` };

    return (
      <div className="everywhere">
        <MainNavContainer />
        <div className="main-content">
          <div className="feed">
            <div className="post-bar">
              <div className="avatar">
                <div className="avatar-img"
                  style={avatar} />
              </div>
              <PostButtonsContainer />
            </div>
            <PostIndexContainer />
          </div>
          <div className="side-bar">
            <p>Recommended Blogs</p>
            <p>Radar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
