import React from 'react';
import { withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';
import ReactLoading from 'react-loading';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      textContent: this.props.textContent,
      contentType: this.props.contentType,
      authorId: this.props.currentUser.id,
      file: null,
      imageUrl: this.props.imageUrl,
      filePreviewUrl: this.props.imageUrl,
      linkUrl: this.props.linkUrl,
      linkPreviewUrl: this.props.linkUrl,
      loader: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.checkImage = this.checkImage.bind(this);
  }

  handleChange(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleEditor(value) {
    this.setState({ textContent: value });
  }

  checkImage(url) {
    return (e) => {
      $.ajax({
        method: 'GET',
        url: `api/prefetch/?image_url=${url}`
      }).then(
        (linkUrl) => {
          this.setState({
            linkPreviewUrl: linkUrl,
            file: null,
            imageUrl: null,
            filePreviewUrl: null,
           });
        }
        // (error) => {
        //   this.setState({ response: `error: ${error}`});
        // }
      );
    };
  }

  updateFile (e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        file: file,
        filePreviewUrl: fileReader.result,
        imageUrl: fileReader.result,
        linkUrl: null,
        linkPreviewUrl: null,
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleClick(formAction) {
    const postData = new FormData();

    if (this.state.file) {
      postData.append(`post[${this.state.contentType}]`, this.state.file);
      postData.append(`post[link_url]`, '');
    } else {
      postData.append(`post[link_url]`, this.state.linkUrl);
    }
    postData.append("post[text_content]", this.state.textContent);
    postData.append("post[content_type]", this.state.contentType);
    postData.append("post[author_id]", this.state.authorId);
    postData.append("post[id]", this.state.id);

    return (e) => {
      e.preventDefault();
      if (formAction === 'action') {
        this.props.action(postData)
          .then(() => {
            this.setState({ loader: false });
            this.props.closeModal();
            this.props.history.push('/dashboard');
          });
      } else {
        this.props.closeModal();
      }

      this.setState({ loader: true });
    };
  }

  render() {

    let preview;
    if (this.state.linkPreviewUrl) {
      preview = ( <img className="file-prev" src={this.state.linkPreviewUrl} /> );
    } else if (this.state.filePreviewUrl) {
      preview = ( <img className="file-prev" src={this.state.filePreviewUrl} /> );
    }
    let loader = this.state.loader ? 'loader' : 'hidden';

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

export default withRouter(PostFormContainer(ImageForm));
