import React from 'react';
import PostDetail from './post_detail';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>
        <p>PP</p>
        <PostDetail post={this.props.post} />
      </li>
    );
  }

}

export default PostIndexItem;
