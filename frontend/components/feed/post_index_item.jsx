import React from 'react';
import PostDetail from './post_detail';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>PP</p>
        <PostDetail post={this.props.post} />
      </div>
    );
  }

}

export default PostIndexItem;
