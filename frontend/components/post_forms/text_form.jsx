import React from 'react';
import PostFormContainer from './post_form_container';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import ReactLoading from 'react-loading';

class TextForm extends React.Component {
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
          });
      } else {
        this.props.closeModal();
      }

      this.props.history.push('/dashboard');

    };
  }

  render() {
    let titleClass, titlePlaceholder, bodyInput;
    switch(this.state.content_type) {
      case 'text':
        titleClass = 'text-title';
        titlePlaceholder = 'Title';
        bodyInput = (
          <div className="text-body">
            <ReactQuill
              theme="bubble"
              placeholder="Body"
              defaultValue={this.state.text_content}
              onChange={this.handleEditor} />
          </div>
        );
        break;
      // case 'quote':
      //   titleClass = 'quote-title';
      //   titlePlaceholder = '"Quote"';
      //   bodyInput = (
      //     <div className="text-body quote-body">
      //       <p className="quote-caption">{"\u2014"}</p>
      //       <div className="quote-editor">
      //         <ReactQuill
      //           theme="bubble"
      //           placeholder="Source"
      //           defaultValue={this.state.text_content}
      //           onChange={this.handleEditor} />
      //       </div>
      //     </div>
      //   );
      //   break;
      case 'chat':
        titleClass = 'hidden';
        titlePlaceholder = '';
        bodyInput = (<div className="text-body">
          <ReactQuill
            theme="bubble"
            placeholder={
              `Muhammad: “Hey, what you got there?”
Jules: “They're chips, you want some?"
Tony: “Jules has the best snacks, damn.”
Muhammad: “No thanks.”`
            }
            defaultValue={this.state.text_content}
            onChange={this.handleEditor} />
        </div>);
    }

    let indicator = <p className="form-error">{this.props.errors[0]}</p>;
    let loader = this.state.loader ? 'loader' : 'hidden';
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
        <textarea
          className={`text-box ${titleClass}`}
          placeholder={`${titlePlaceholder}`}
          value={this.state.title}
          onChange={this.handleChange('title')} />

        { bodyInput }

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

export default withRouter(PostFormContainer(TextForm));
