import React from 'react';
import { connect } from 'react-redux';
import PostDetailOptionsContainer from './post_detail_options_container';
import renderHTML from 'react-render-html';
import { followUser, unfollowUser } from '../../actions/follow_actions';
import YouTube from 'react-youtube';
import { youtubeGetID } from '../../util/helpers';


class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    let followAction, followKlass;
    if (this.props.followedUserIds.includes(this.props.user.id)) {
      followAction = 'Unfollow';
      followKlass = 'unfollow';
    } else {
      followAction = 'Follow';
      followKlass = 'follow';
    }
    followKlass = this.props.user.id === this.props.currentUser.id ?
      'hidden' :
      followKlass;
    this.state = { followAction: followAction, followKlass: followKlass };
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.state.followAction === 'Unfollow') {
      this.props.unfollowUser(this.props.user.id)
        .then(() => this.setState({ followAction: 'Follow', followKlass: 'follow' }));
    } else {
      this.props.followUser(this.props.user.id)
        .then(() => this.setState({ followAction: 'Unfollow', followKlass: 'unfollow' }));
    }
  }

  renderPost(type) {
    let header = this.props.miniKlass ? null : (
      <div className="post-det-header">
          <p className="username-head">{this.props.user.username}</p>
          <button
            className={this.state.followKlass}
            onClick={this.handleFollow}>{this.state.followAction}
          </button>
      </div>
    );

    let body = this.props.post.text_content ? (
      <div className="text-post">
        { renderHTML(this.props.post.text_content) }
      </div>) :
      null;

    let videoSize = this.props.miniKlass ? '320' : '546';

    switch(type) {
      case 'text':
        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            { header }
            <h4 className="title">{this.props.post.title}</h4>
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
      case 'image':
        let image = this.props.post.link_url ?
          this.props.post.link_url :
          this.props.post.image_url;

        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            { header }
            <img className="file-post" src={image} />
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
      case 'quote':
        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            { header }
            <h4 className="title quote">{this.props.post.title}</h4>
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
      case 'link':
        const hostStartIdx = this.props.post.link_host.indexOf('.') + 1;
        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            <a className="post-link link-bg" href={this.props.post.link_url} target="_blank">
              { header }
              <p className="link-host">{this.props.post.link_host.slice(hostStartIdx)}</p>
              <img className="file-post" src={this.props.post.image_url} />
              <h4 className="title link-bg">{this.props.post.title}</h4>
              <div className={
                  this.props.post.caption ?
                    "text-post link-bg" :
                    "hidden"
                }>
                {this.props.post.caption}
              </div>
            </a>
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
      case 'chat':
        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            { header }
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
      case 'audio':
        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            { header }
            <audio className="audio-prev" controls src={this.props.post.audio_url} />
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
      case 'video':
        let player;
        if (this.props.post.link_url) {
          const opts = {
            width: `${videoSize}`,
            playerVars: {
              autoplay: 0
            }
          };
          player = (<YouTube
            videoId={youtubeGetID(this.props.post.link_url)}
            opts={opts} />);
        } else {
          player = (
            <video
              className="file-post"
              src={this.props.post.video_url}
              controls
            />);
        }

        return (
          <div className={`post ${this.props.miniKlass} ${this.props.hideDetail}`}>
            { header }
            { player }
            { body }
            <PostDetailOptionsContainer
              post={this.props.post}
              miniKlass={this.props.miniKlass} />
          </div>
        );
    }
  }

  render () {
    return this.renderPost(this.props.post.content_type);
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    followedUserIds: state.dashboard.followedUserIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
