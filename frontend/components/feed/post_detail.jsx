import React from 'react';
import PostDetailOptionsContainer from './post_detail_options_container';
import renderHTML from 'react-render-html';


class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
  }

  renderTextPost() {
    return (
      <div className={`post ${this.props.hideDetail}`}>
        <p className="username-head">username</p>
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
        <p className="username-head">username</p>
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
        <p className="username-head">username</p>
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
          <p className="username-head">username</p>
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
        <p className="username-head">username</p>
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
        <p className="username-head">username</p>
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
      case 'video':
        return this.renderVideoPost();
      case 'quote':
        return this.renderQuotePost();
      case 'link':
        return this.renderLinkPost();
      case 'chat':
        return this.renderChatPost();
    }
  }
}

export default PostDetail;
