import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
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
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          user={this.props.users[post.author_id]}
          postType={this.props.postType}
          editForm={this.props.editForm}
          />
      );
    });

    return (
      <div className="posts">
        <ul>
          { posts }
        </ul>
      </div>
    );
  }
}

export default PostIndex;
