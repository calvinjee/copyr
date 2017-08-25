import React from 'react';
import TextForm from './text_form';


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
        form = <TextForm />;
    }

    return(
      <ul className="post-buttons">
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>Aa</i>
              <span>Text</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Photo</span>
            </div>  
            </button>
        </li>
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Quote</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Link</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Chat</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Audio</span>
            </div>
            </button>
        </li>
        <li>
          <button onClick={this.showForm('text')}>
            <div>
              <i>IMG</i>
              <span>Video</span>
            </div>
            </button>
        </li>
        { form }
      </ul>
    );
  }
}

export default PostButtons;
