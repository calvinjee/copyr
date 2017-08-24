import React from 'react';
import FormContainer from './form_container';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      title: null,
      text_content: null,
      content_type: 'text'
    });
  }

  render() {
    return(
      <div>
        <p className="username-head">{this.props.currentUser.username}</p>
        <textarea
          className="auth-input auth-email"
          placeholder="Title"
          value={this.state.email}
          onChange={this.handleChange('email')} />
        <textarea
          className="auth-input auth-email"
          placeholder="Body"
          value={this.state.email}
          onChange={this.handleChange('email')} />



      </div>
    );
  }
}

// TODO: ask if this is okay
export default FormContainer(TextForm);
