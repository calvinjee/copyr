import React from 'react';

class RecommendedUsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followAction: 'Follow' };
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.state.followAction === 'Unfollow') {
      this.props.unfollowUser(this.props.user.id)
        .then(() => this.setState({ followAction: 'Follow' }));
    } else {
      this.props.followUser(this.props.user.id)
        .then(() => this.setState({ followAction: 'Unfollow' }));
    }
  }

  render() {
    const avatar = { backgroundImage: `url(${this.props.user.avatar_url})` };
    const followButton = this.state.followAction === 'Follow' ?
      (<i
        className="fa fa-plus"
        onClick={this.handleFollow}
        aria-hidden="true"></i>) :
      (<i
        className="fa fa-minus"
        onClick={this.handleFollow}
        aria-hidden="true"></i>);

    return (
      <li>
        <div className="avatar-img rec-avatar" style={avatar} />
        <div className="username-bio">
          <p className="username-head username-bio">{this.props.user.username}</p>
          <span>{this.props.user.bio}</span>
        </div>
        <div className="rec-follow">
          { followButton }
        </div>
      </li>
    );
  }
}

export default RecommendedUsersIndexItem;
