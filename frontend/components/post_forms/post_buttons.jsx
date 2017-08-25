import React from 'react';
import TextForm from './text_form';
import ImageForm from './image_form';
import VideoForm from './video_form';


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
    let form, barDisplay = null;
    switch(this.props.postType) {
      case 'text':
        form = <TextForm />;
        break;
      case 'image':
        form = <ImageForm />;
        break;
      case 'video':
        form = <VideoForm />;
        break;
    }

    if (form) {
      return form;
    }

    return(
      <ul className="post-buttons">

        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('text')}>
            <div>
              <i>Aa</i>
              <span>Text</span>
            </div>
            </button>
        </li>
        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('image')}>
            <div>
              <i>IMG</i>
              <span>Photo</span>
            </div>
            </button>
        </li>
        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Quote</span>
            </div>
            </button>
        </li>
        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Link</span>
            </div>
            </button>
        </li>
        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Chat</span>
            </div>
            </button>
        </li>
        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Audio</span>
            </div>
            </button>
        </li>
        <li id={`${barDisplay}`}>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Video</span>
            </div>
            </button>
        </li>
      </ul>
    );
  }
}

export default PostButtons;
