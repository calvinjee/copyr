import React from 'react';
import PostDetailOptionsContainer from './post_detail_options_container';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
  }

  renderTextPost() {
    return (
      <div className="post">
        <p className="username-head">username</p>
        <h4 className="title">{this.props.post.title}</h4>
        <p className="text-post">{this.props.post.text_content}</p>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }

  renderImagePost() {
    return (
      <div className="post">
        <p className="username-head">username</p>
        <h4 className="title">{this.props.post.title}</h4>
        <img src={this.props.post.image_url} />
        <p className="text-post">{this.props.post.caption}</p>
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
    }


  }
}

export default PostDetail;
