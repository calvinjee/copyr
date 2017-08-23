import React from 'react';
import SessionFormContainer from './session_form_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(form) {
    return (e) => {
      e.preventDefault();
      this.setState({ form: form });
      // this.props.openModal();
    };
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

    return (
      <div className="home-main">
        <div className="nav-logo"><h3>c</h3></div>
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
        </div>
      </div>
    );
  }
}

export default Home;
