import React from 'react';
import { withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      imageFile: null,
      imageUrl: this.props.imageUrl,
      textContent: this.props.textContent,
      contentType: 'image',
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

    if (this.state.imageFile) {
      postData.append("post[image]", this.state.imageFile);
    }
    postData.append("post[text_content]", this.state.textContent);
    postData.append("post[content_type]", this.state.contentType);
    postData.append("post[author_id]", this.state.authorId);
    postData.append("post[id]", this.state.id);
    debugger

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
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return(
      <div className="form text-form">
        <p className="username-head">{this.props.currentUser.username}</p>

        <img className="file-prev" src={this.state.imageUrl} />

        <div className="upload-box">
          <button
            htmlFor="file"
            className="upload-image"
            onChange={this.updateFile}>
            <input
              type="file"
              className="upload-file"
              name="file"
              id="file" />
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
