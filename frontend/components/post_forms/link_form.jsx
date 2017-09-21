import React from 'react';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import ReactLoading from 'react-loading';

class LinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      link_url: this.props.linkUrl,
      text_content: this.props.textContent,
      content_type: this.props.contentType,
      author_id: this.props.currentUser.id,
      loader: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleEditor(value) {
    this.setState({ text_content: value });
  }

  handleClick(formAction) {
    return (e) => {
      e.preventDefault();
      let postData = { post: this.state };
      delete postData['loader'];

      this.props.resetErrors();
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
        this.props.history.push('/dashboard');
      }
    };
  }

  render() {
    let loader = this.state.loader ? 'loader' : 'hidden';
    let indicator = <p className="form-error">{this.props.errors[0]}</p>;
    if (this.props.errors.length === 0) {
      indicator = (<ReactLoading
        className={loader}
        type='cylon'
        height='25'
        color='#36465d'
        width='75'
        delay={10} />);
    }

    return(
      <div className={`form text-form pullDown ${this.props.pullUp}`}>
        <p className="username-head">{this.props.currentUser.username}</p>
        <div className="link-box">
        <input
          className="text-body link-url"
          placeholder="Type or paste a URL"
          value={this.state.link_url}
          onChange={this.handleChange('link_url')} />
        </div>

        <div className="text-body">
          <ReactQuill
            theme="bubble"
            placeholder="Comment"
            defaultValue={this.state.text_content}
            onChange={this.handleEditor} />
        </div>

        <div className="form-footer">
          <button
            className="form-butt form-close-butt"
            onClick={this.handleClick('close')}>
            <span>Close</span></button>
          { indicator }
          <button
            className="form-butt form-post-butt"
            onClick={this.handleClick('action')}>
            <span>Post</span></button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostFormContainer(LinkForm));
