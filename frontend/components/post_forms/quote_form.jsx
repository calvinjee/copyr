import React from 'react';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text_content: '',
      content_type: 'text',
      author_id: this.props.currentUser.id
    };
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
    let postData = { post: this.state };
    return (e) => {
      e.preventDefault();
      formAction === 'post' ?
        this.props.addPost(postData).then(() => this.props.closeModal()) :
        this.props.closeModal();
    };
  }

  render() {
    let options = {
      // debug: 'info',
      // modules: {
      //   toolbar: '#toolbar'
      // },
      placeholder: 'Compose an epic...',
      theme: 'bubble'
    };

    return(
      <div className="form text-form stretchDown">
        <p className="username-head">{this.props.currentUser.username}</p>
        <textarea
          className="text-box text-title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange('title')} />

        <ReactQuill
          theme="bubble"
          placeholder="Body"
          value={this.state.text_content}
          onChange={this.handleChange('text_content')} />

        <div className="form-footer">
          <button
            className="form-butt form-close-butt"
            onClick={this.handleClick('close')}>
            <span>Close</span></button>
          <button
            className="form-butt form-post-butt"
            onClick={this.handleClick('post')}>
            <span>Post</span></button>
        </div>
      </div>
    );
  }
}

export default PostFormContainer(QuoteForm);
