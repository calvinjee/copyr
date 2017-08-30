import React from 'react';
import { followUser, unfollowUser } from '../../actions/follow_actions';

class RecommendedUsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followAction: 'Follow', followKlass: 'rec-follow' };
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.state.followAction === 'Unfollow') {
      this.props.unfollowUser(this.props.user.id)
        .then(() => this.setState({ followAction: 'Follow', followKlass: 'rec-follow' }));
    } else {
      this.props.followUser(this.props.user.id)
        .then(() => this.setState({ followAction: 'Unfollow', followKlass: 'rec-unfollow' }));
    }
  }

  render() {
    const avatar = { backgroundImage: `url(${this.props.user.avatar_url})` };

    return (
      <div>
        <div className="avatar-img rec-avatar" style={avatar} />
        <div>
          <p className="username-head rec-username">{this.props.user.username}</p>
          <p>{this.props.user.bio}</p>
        </div>
        <div>
          <i
            className={`fa fa-plus ${this.state.followKlass}`}
            onClick={this.handleFollow}
            aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default RecommendedUsersIndexItem;
