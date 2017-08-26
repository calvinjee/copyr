import React from 'react';
import PostFormContainer from './post_form_container';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      caption: '',
      contentType: 'image',
      authorId: this.props.currentUser.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleClick(formAction) {
    const postData = new FormData();
    postData.append("post[image]", this.state.imageFile);
    postData.append("post[caption]", this.state.caption);
    postData.append("post[content_type]", this.state.contentType);
    postData.append("post[author_id]", this.state.authorId);

    return (e) => {
      e.preventDefault();
      formAction === 'post' ?
        this.props.addPost(postData).then(() => this.props.closeModal()) :
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

        <textarea
          className="text-box text-body"
          placeholder="Caption"
          value={this.state.caption}
          onChange={this.handleChange('caption')} />
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

export default PostFormContainer(ImageForm);
