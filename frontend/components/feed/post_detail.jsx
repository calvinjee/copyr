import React from 'react';
import PostDetailOptionsContainer from './post_detail_options_container';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(this.props.history.push("/"));
  }

  render () {

    switch(this.props.post.content_type) {
      case 'text':

    }

    return (
      <div>
        <p className="username-head">username</p>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.text_content}</p>
        <PostDetailOptionsContainer post={this.props.post} />
      </div>
    );
  }
}

export default PostDetail;
