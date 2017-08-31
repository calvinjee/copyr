import React from 'react';
import { withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      file: null,
      previewUrl: this.props.imageUrl,
      textContent: this.props.textContent,
      contentType: this.props.contentType,
      authorId: this.props.currentUser.id,
      linkUrl: '',
      response: 'no res yet',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.checkImage = this.checkImage.bind(this);
  }

  checkImage(url) {
    debugger
    // $.ajax({
    //   method: 'GET',
    //   url: `api/posts/prefetch/?image_url=${url}`
    // }).then(
    //   (res) => this.setState({ response: res }),
    //   (error) => this.setState({ response: `error: ${error}`})
    // );
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
      this.setState({ file: file, previewUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    let preview;
    if (this.state.previewUrl) {
      preview = ( <img className="file-prev" src={this.state.previewUrl} /> );
    }

    return(
      <div className={`form text-form pullDown ${this.props.pullUp}`}>
        <p className="username-head">{this.props.currentUser.username}</p>

        { preview }

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
            <div className="img-upload-bg">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <p>Upload a photo</p>
            </div>
          </button>
          <div className="upload-image">
            <div className="img-upload-bg">
              <i className="fa fa-globe" aria-hidden="true"></i>
              <p>Add from web</p>
              <input
                className="link-url video-url"
                onChange={this.handleChange('linkUrl')}
                placeholder="Paste link here..."></input>
              <button
                onClick={this.checkImage(this.state.linkUrl)}>
                Preview
              </button>
              <p>{this.state.response}</p>
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
