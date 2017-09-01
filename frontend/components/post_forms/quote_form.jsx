import React from 'react';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      text_content: this.props.textContent,
      content_type: this.props.contentType,
      author_id: this.props.currentUser.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.textContent });
  }

  handleEditor(value) {
    this.setState({ text_content: value });
  }

  handleClick(formAction) {
    let postData = { post: this.state };
    return (e) => {
      e.preventDefault();
      formAction === 'action' ?
        this.props.action(postData).then(() => this.props.closeModal()) :
        this.props.closeModal();
    };
  }

  render() {
    let quote = this.state.title ? `"${this.state.title}` : '"Quote';
    return(
      <div className={`form text-form pullDown ${this.props.pullUp}`}>
        <p className="username-head">{this.props.currentUser.username}</p>
          <div
            className="quote-title"
            placeholder={quote}
            contentEditable='true'
            value={this.state.title}
            onInput={this.handleChange} />

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
            onClick={this.handleClick('action')}>
            <span>Post</span></button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostFormContainer(QuoteForm));
