import React from 'react';
import { connect } from 'react-redux';
import PostDetailOptionsContainer from './post_detail_options_container';
import renderHTML from 'react-render-html';
import { followUser, unfollowUser } from '../../actions/follow_actions';


class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    let followKlass = this.props.user.id === this.props.currentUser.id ?
      'hidden' :
      'unfollow';
    this.state = { followAction: 'Unfollow', followKlass: followKlass };
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

  renderTextPost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <div className="post-det-header">
            <p className="username-head">{this.props.user.username}</p>
            <button
              className={this.state.followKlass}
              onClick={this.handleFollow}>{this.state.followAction}
            </button>
        </div>
        <h4 className="title">{this.props.post.title}</h4>
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderImagePost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <div className="post-det-header">
            <p className="username-head">{this.props.user.username}</p>
            <button
              className={this.state.followKlass}
              onClick={this.handleFollow}>{this.state.followAction}
            </button>
        </div>
        <img className="file-post" src={this.props.post.image_url} />
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderQuotePost() {
    // <p className="text-post">{this.props.post.text_content}</p>
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <div className="post-det-header">
            <p className="username-head">{this.props.user.username}</p>
            <button
              className={this.state.followKlass}
              onClick={this.handleFollow}>{this.state.followAction}
            </button>
        </div>
        <h4 className="title">{this.props.post.title}</h4>
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderLinkPost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <a className="post-link link-bg" href={this.props.post.link_url} target="_blank">
          <div className="post-det-header">
              <p className="username-head">{this.props.user.username}</p>
              <button
                className={this.state.followKlass}
                onClick={this.handleFollow}>{this.state.followAction}
              </button>
          </div>
          <p className="link-host">{this.props.post.link_host.slice(4)}</p>
          <img className="file-post" src={this.props.post.image_url} />
          <h4 className="title link-bg">{this.props.post.title}</h4>
          <div className="text-post link-bg">{this.props.post.caption}</div>
        </a>
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderChatPost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <div className="post-det-header">
            <p className="username-head">{this.props.user.username}</p>
            <button
              className={this.state.followKlass}
              onClick={this.handleFollow}>{this.state.followAction}
            </button>
        </div>
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderAudioPost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <div className="post-det-header">
            <p className="username-head">{this.props.user.username}</p>
            <button
              className={this.state.followKlass}
              onClick={this.handleFollow}>{this.state.followAction}
            </button>
        </div>
        <audio className="audio-prev" controls src={this.props.post.audio_url} />
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderVideoPost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <div className="post-det-header">
            <p className="username-head">{this.props.user.username}</p>
            <button
              className={this.state.followKlass}
              onClick={this.handleFollow}>{this.state.followAction}
            </button>
        </div>
        <video className="file-post" controls src={this.props.post.video_url} />
        <div className="text-post">
          { renderHTML(this.props.post.text_content) }
        </div>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  render () {
    switch(this.props.post.content_type) {
      case 'text':
        return this.renderTextPost();
      case 'image':
        return this.renderImagePost();
      case 'quote':
        return this.renderQuotePost();
      case 'link':
        return this.renderLinkPost();
      case 'chat':
        return this.renderChatPost();
      case 'audio':
        return this.renderAudioPost();
      case 'video':
        return this.renderVideoPost();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
