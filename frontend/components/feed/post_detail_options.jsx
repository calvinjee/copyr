import React from 'react';

class PostDetailOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render () {
    let lastButton;
    if (this.props.post.author_id === this.props.currentUser.id) {
      lastButton = (<p>gear button</p>);

    } else {
      lastButton = (<p>heart button</p>);
    }

    return (
      <div className="post-options">
        <p>b1</p>
        <p>b2</p>
        <p>b3</p>
        { lastButton }
      </div>
    );
  }
}

export default PostDetailOptions;
