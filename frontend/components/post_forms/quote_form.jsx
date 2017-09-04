import React from 'react';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import ReactLoading from 'react-loading';

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      text_content: this.props.textContent,
      content_type: this.props.contentType,
      author_id: this.props.currentUser.id,
      loader: false,
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
    return (e) => {
      e.preventDefault();
      let postData = { post: this.state };
      delete postData['loader'];

      if (formAction === 'action') {
        this.setState({ loader: true });
        this.props.action(postData)
          .then(() => {
            this.setState({ loader: false });
            this.props.closeModal();
            this.props.history.push('/dashboard');
          });
      } else {
        this.props.closeModal();
      }
    };
  }

  render() {
    let quote = this.state.title ? `"${this.state.title}` : '"Quote';
    let loader = this.state.loader ? 'loader' : 'hidden';

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
          <ReactLoading className={loader} type='cylon' height='25' color='#36465d' width='75' delay={10} />
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
