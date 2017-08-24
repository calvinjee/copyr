import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(this.props.history.push("/"));
  }

  render () {
    // will be mapping over of array of user_followed_post_ids instead
    const posts = this.props.posts.map((post) => {
      return (<li><PostIndexItem post={post} /></li>);
    });

    return (
      <div>
        <ul>
          { posts }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
