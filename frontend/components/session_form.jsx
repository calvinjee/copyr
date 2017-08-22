import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(input) {
    return (e) => {
      // e.preventDefault();
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleClick(e) {
    e.preventDefault();
    let user = this.state;
    this.props.processForm(user);
  }

  render () {
    let usernameInput;
    if (this.props.formType === 'Sign Up') {
      usernameInput =
        (<label>Username
          <input
            value={this.state.username}
            onChange={this.handleChange('username')} />
        </label>);
    } else {
      usernameInput = null;
    }

    return (
      <form>
        <label>Email
          <input
            value={this.state.email}
            onChange={this.handleChange('email')} />
        </label>

        <label>Password
          <input
            value={this.state.password}
            onChange={this.handleChange('password')} />
        </label>

        { usernameInput }

        <button onClick={this.handleClick}>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
