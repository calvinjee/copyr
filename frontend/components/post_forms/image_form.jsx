import React from 'react';
import { withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    let url;
    switch(this.props.contentType) {
      case 'image':
        url = this.props.imageUrl;
        break;
      case 'video':
        url = this.props.videoUrl;
        break;
    }
    this.state = {
      id: this.props.id,
      file: null,
      url: url,
      textContent: this.props.textContent,
      contentType: this.props.contentType,
      authorId: this.props.currentUser.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleEditor(value) {
    this.setState({ textContent: value });
  }

  handleClick(formAction) {
    const postData = new FormData();

    if (this.state.file) {
      postData.append(`post[${this.state.contentType}]`, this.state.file);
    }
    postData.append("post[text_content]", this.state.textContent);
    postData.append("post[content_type]", this.state.contentType);
    postData.append("post[author_id]", this.state.authorId);
    postData.append("post[id]", this.state.id);

    return (e) => {
      e.preventDefault();
      formAction === 'action' ?
        this.props.action(postData).then(() => this.props.closeModal()) :
        this.props.closeModal();
    };
  }

  updateFile (e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ file: file, url: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    let prev, uploadBackground;

    switch(this.state.contentType) {
      case 'image':
        prev = ( <img className="file-prev" src={this.state.url} /> );
        uploadBackground = (
          <div className="img-upload-bg">
            <i className="fa fa-camera" aria-hidden="true"></i>
            <p>Upload a photo</p>
          </div>
        );
        break;
      case 'video':
        prev = ( <video className="video-prev" controls src={this.state.url} /> );
        uploadBackground = (
          <div className="img-upload-bg">
            <i className="fa fa-video-camera" aria-hidden="true"></i>
            <p>Upload a video</p>
          </div>
        );
        break;
    }

    if (this.state.contentType === 'video') {
      prev = null;
    }


    return(
      <div className={`form text-form ${this.props.pullUp}`}>
        <p className="username-head">{this.props.currentUser.username}</p>

        { prev }

        <div className="upload-box">
          <button
            htmlFor="file"
            className="upload-image"
            onChange={this.updateFile}>
            <input
              type="file"
              className="upload-file"
              name="file"
              id="file">
            </input>
            {uploadBackground}
          </button>
          <div className="upload-image">
            <div className="img-upload-bg">
              <i className="fa fa-globe" aria-hidden="true"></i>
              <p>Add from web</p>
              <p>Coming soon...</p>
            </div>
          </div>
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
          <button
            className="form-butt form-post-butt"
            onClick={this.handleClick('action')}>
            <span>Post</span></button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostFormContainer(ImageForm));
