import React from 'react';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';
import { withRouter } from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      videoFile: null,
      videoUrl: this.props.videoUrl,
      textContent: this.props.textContent,
      contentType: 'video',
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
    postData.append("post[video]", this.state.videoFile);
    postData.append("post[text_content]", this.state.textContent);
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
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ videoFile: file, videoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return(
      <div className="form text-form">
        <p className="username-head">{this.props.currentUser.username}</p>

        <video controls src={this.state.videoUrl} />
        <input type="file" onChange={this.updateFile} />

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
            onClick={this.handleClick('post')}>
            <span>Post</span></button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostFormContainer(VideoForm));
