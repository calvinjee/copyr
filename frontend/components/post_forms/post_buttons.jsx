import React from 'react';
import TextForm from './text_form';
import ImageForm from './image_form';
import LinkForm from './link_form';
import AudioForm from './audio_form';


class PostButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  showForm(postType) {
    return (e) => {
      e.preventDefault();
      this.props.postFormModal(postType);
    };
  }

  render() {
    let form = null;
    switch(this.props.postType) {
      case 'text':
        form = <TextForm contentType='text' />;
        break;
      case 'image':
        form = <ImageForm contentType='image' />;
        break;
      case 'quote':
        form = <TextForm contentType='quote' />;
        break;
      case 'link':
        form = <LinkForm contentType='link' />;
        break;
      case 'chat':
        form = <TextForm contentType='chat' />;
        break;
      case 'audio':
        form = <AudioForm contentType='audio' />;
        break;
      case 'video':
        form = <ImageForm contentType='video' />;
        break;
    }

    if (form && !this.props.editPostId) {
      return  (
        <div>
          {form};
          <div className="form-modal" />
        </div>
      );
    }

    return(
      <ul className="post-buttons">
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i className="fa fa-font" aria-hidden="true"></i>
              <span>Text</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('image')}>
            <div>
              <i className="fa fa-camera fa-camera-btn" aria-hidden="true"></i>
              <span>Photo</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('quote')}>
            <div>
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <span>Quote</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('link')}>
            <div>
              <i className="fa fa-link" aria-hidden="true"></i>
              <span>Link</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('chat')}>
            <div>
              <i className="fa fa-twitch" aria-hidden="true"></i>
              <span>Chat</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('audio')}>
            <div>
              <i className="fa fa-headphones" aria-hidden="true"></i>
              <span>Audio</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('video')}>
            <div>
              <i className="fa fa-video-camera fa-video-camera-btn" aria-hidden="true"></i>
              <span>Video</span>
            </div>
            </button>
        </li>
      </ul>
    );
  }
}

export default PostButtons;
