import React from 'react';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text_content: '',
      content_type: 'quote',
      author_id: this.props.currentUser.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleReset = this.handleReset.bind(this);
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

  // handleReset(e) {
  //   this.setState({ title: '' });
  // }

  render() {
    // ORIGINAL BODY FORM
    // <textarea
    //   className="text-box text-body"
    //   placeholder="Body"
    //   value={this.state.text_content}
    //   onChange={this.handleChange('text_content')} />
    // <div className="quote-box">
    // <span>{"\u0022"}</span>
    // </div>

    return(
      <div className="form text-form stretchDown">
        <p className="username-head">{this.props.currentUser.username}</p>

      <textarea
          className="text-box quote-title"
          placeholder='"Quote"'
          value={this.state.title}
          onChange={this.handleChange('title')} />

        <div className="text-body quote-body">
          <p className="quote-caption">{"\u2014"}</p>
          <div className="quote-editor">
            <ReactQuill
              theme="bubble"
              placeholder="Source"
              defaultValue={this.state.text_content}
              onChange={this.handleEditor} />
          </div>
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

export default PostFormContainer(QuoteForm);
