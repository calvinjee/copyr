import React from 'react';
import SessionFormContainer from './session_form_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);

  }

  handleClick(form) {
    return (e) => {
      e.preventDefault();
      this.setState({ form: form });
      // this.props.openModal();
    };
  }

  handleGuestLogin(e) {
    this.props.login({email: 'clavinjee@gmail.com', password: 'password'});
  }

  render () {
    // debugger
    let form, signupChange, signupColor, loginChange;
    if (this.state.form !== '') {
      form = <SessionFormContainer form={this.state.form} />;
      if (this.state.form === 'signup') {
        signupChange = 'hidden';
      } else {
        loginChange = 'hidden';
        signupChange = 'white-butt';
      }
    } else {
      form = null;
    }

    const errors = this.props.errors.map((error, idx) => {
      return (<p key={idx}>{error}</p>);
    });

    return (
      <div className="home-main">
        <div><h3 className="nav-logo">c</h3></div>
        <div className="home-mid">
          <h2 className="home-logo">copyr.</h2>
          <p className="home-desc">Put some text here.</p>
          <p className="home-desc">And some more text down here.</p>
          { form }
          <button
            className={`home-butt signup ${signupChange}`}
            onClick={this.handleClick('signup')}>
            <span>Get Started</span></button>
          <button
            className={`home-butt login ${loginChange}`}
            onClick={this.handleClick('login')}>
            <span>Log In</span></button>
          <button
            className="home-butt guest-login"
            onClick={this.handleGuestLogin}>
            <span>Demo</span></button>
          { errors }
        </div>
      </div>
    );
  }
}

export default Home;
