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
    let usernameInput, pwBord;
    if (this.props.formType === 'Sign Up') {
      usernameInput =
        (<input
            className="auth-input auth-username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange('username')} />
        );
    } else {
      usernameInput = null;
      pwBord = 'pw-bot-bord';
    }

    return (
      <form className="slide">
        <ul className="form-list">
        <input
          className="auth-input auth-email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange('email')} />
        <input
          className={`auth-input auth-pw ${pwBord}`}
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange('password')} />
        { usernameInput }
        <button
          className="home-butt signup"
          onClick={this.handleClick}>{this.props.formType}</button>
        </ul>
      </form>
    );
  }
}

export default SessionForm;
