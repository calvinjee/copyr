import React from 'react';
import { withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';
import ReactLoading from 'react-loading';

class AudioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      file: null,
      previewUrl: this.props.audioUrl,
      textContent: this.props.textContent,
      contentType: this.props.contentType,
      authorId: this.props.currentUser.id,
      loader: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleChange(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleEditor(value) {
    this.setState({ textContent: value });
  }

  updateFile (e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ file: file, previewUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleClick(formAction) {
    return (e) => {
      e.preventDefault();
      const postData = new FormData();

      if (this.state.file) {
        postData.append(`post[${this.state.contentType}]`, this.state.file);
      }
      postData.append("post[text_content]", this.state.textContent);
      postData.append("post[content_type]", this.state.contentType);
      postData.append("post[author_id]", this.state.authorId);
      postData.append("post[id]", this.state.id);

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
    let prev;
    if (this.state.previewUrl) {
      prev = ( <audio className="audio-prev" controls src={this.state.previewUrl} /> );
    }
    let loader = this.state.loader ? 'loader' : 'hidden';

    return(
      <div className={`form text-form pullDown ${this.props.pullUp}`}>
        <p className="username-head">{this.props.currentUser.username}</p>

        { prev }

        <div className="audio-box">
          <div className="audio-search">
            <i className="fa fa-search fa-search-audio" aria-hidden="true"></i>
            <input className="audio-search-box" placeholder="Search coming soon..."/>
          </div>

          <button
            htmlFor="file"
            className="upload-audio"
            onChange={this.updateFile}>
            <input
              type="file"
              className="audio-file"
              name="file"
              id="file">
            </input>

            <div className="audio-upload-bg">
              <i className="fa fa-headphones fa-headphones-upload" aria-hidden="true"></i>
            </div>
          </button>
        </div>

        <div className="text-body">
          <ReactQuill
            theme="bubble"
            placeholder="Caption"
            defaultValue={this.state.textContent}
            onChange={this.handleEditor} />
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

export default withRouter(PostFormContainer(AudioForm));
