import React from 'react';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text_content: '',
      content_type: 'text',
      author_id: this.props.currentUser.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleEditor(value) {
    this.setState({ text_content: value });
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
    // ORIGINAL BODY FORM
    // <textarea
    //   className="text-box text-body"
    //   placeholder="Body"
    //   value={this.state.text_content}
    //   onChange={this.handleChange('text_content')} />

    return(
      <div className="form text-form stretchDown">
        <p className="username-head">{this.props.currentUser.username}</p>
        <textarea
          className="text-box text-title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange('title')} />

        <div className="text-body">
          <ReactQuill
            theme="bubble"
            placeholder="Body"
            defaultValue={this.state.text_content}
            onChange={this.handleEditor} />
        </div>

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

export default PostFormContainer(TextForm);