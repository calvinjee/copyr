import React from 'react';
import PostDetailOptionsContainer from './post_detail_options_container';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render () {

    switch(this.props.post.content_type) {
      case 'text':

    }

    return (
      <div className="post">
        <p className="username-head">username</p>
        <h4 className="title">{this.props.post.title}</h4>
        <p className="text-post">{this.props.post.text_content}</p>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }
}

export default PostDetail;
