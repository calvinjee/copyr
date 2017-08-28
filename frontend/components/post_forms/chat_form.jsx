import React from 'react';
import PostFormContainer from './post_form_container';
import ReactQuill from 'react-quill';
// import renderHTML from 'react-render-html';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text_content: '',
      content_type: 'chat',
      author_id: this.props.currentUser.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleEditor(value) {
    this.setState({ text_content: value });
  }

  handleClick(formAction) {
    let postData = { post: this.state };
    return (e) => {
      e.preventDefault();
      formAction === 'post' ?
        this.props.addPost(postData).then(() => this.props.closeModal()) :
        this.props.closeModal();
    };
  }

  render() {
    // ORIGINAL BODY FORM
    // <textarea
    //   className="text-box text-body"
    //   placeholder="Body"
    //   value={this.state.text_content}
    //   onChange={this.handleChange('text_content')} />
    return(
      <div className="form text-form stretchDown">
        <p className="username-head">{this.props.currentUser.username}</p>

        <div className="text-body">
          <ReactQuill
            theme="bubble"
            placeholder={
              `Muhammad: “Hey, what you got there?”
Jules: “They're chips, you want some?"
Tony: “Jules has the best snacks, damn.”
Muhammad: “No thanks.”`
            }
            defaultValue={this.state.text_content}
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

export default PostFormContainer(ChatForm);

// <p><strong>Musa: </strong>Calvin is the coolest person in the world.</p></br>
// <p><strong>Calvin: </strong>Go eat a dick you terrorist.</p></br>
// <p><strong>Musa: </strong>I'm not a terrorist you cunt.</p></br>
// <p><strong>Calvin: </strong>Yea you are you bitch, look at that bomb in your hand.</p></br>
// <p><strong>Musa: </strong>That's not a bomb, that's a vape you bitch.</p>
