import React from 'react';
import PostDetail from './post_detail';
import PostDetailOptionsContainer from './post_detail_options_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const avatar = { backgroundImage: `url(${this.props.user.avatar_url})` };

    return (
      <li>
        <div className="avatar sticky-avatar">
          <div className="avatar-img"
            style={avatar} />
        </div>
          <PostDetail post={this.props.post} />
      </li>
    );
  }

}

export default PostIndexItem;
