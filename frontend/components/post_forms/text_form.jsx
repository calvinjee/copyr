import React from 'react';
import PostFormContainer from './post_form_container';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      title: null,
      text_content: null,
      content_type: 'text'
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleClick(formAction) {
    let post = this.state;
    return (e) => {
      e.preventDefault();
      // formAction === 'post' ? this.props.addPost(post) : 'close modal';
    };
  }

  render() {
    return(
      <div>
        <p className="username-head">{this.props.currentUser.username}</p>
        <textarea
          className="auth-input auth-email"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange('title')} />
        <textarea
          className="auth-input auth-email"
          placeholder="Body"
          value={this.state.text_content}
          onChange={this.handleChange('text_content')} />
        <div className="form-footer">
          <button
            className="form-close-butt"
            handleClick={this.handleClick('close')}>
            Close</button>
          <button
            className="form-post-butt"
            handleClick={this.handleClick('post')}>
            Post</button>
        </div>
      </div>
    );
  }
}

// TODO: ask if this is okay
export default PostFormContainer(TextForm);
