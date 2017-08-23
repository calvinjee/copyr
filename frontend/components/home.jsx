import React from 'react';
import SessionFormContainer from './session_form_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: 'login' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(form) {
    return (e) => {
      e.preventDefault();
      this.setState({ form: form });
      this.props.openModal();
    };
  }

  render () {
    // debugger
    let form;
    if (this.props.modalOpen) {
      form = <SessionFormContainer form={this.state.form} />;
    } else {
      form = null;
    }

    return (
      <div className="home-main">
        <div className="nav-logo"><h3>c</h3></div>
        <div className="home-mid">
          <h2 className="home-logo">copyr.</h2>
          <p className="home-desc">Come for what you love.</p>
          <p className="home-desc">Stay for what you hate.</p>
          { form }
          <button
            className="home-butt signup"
            onClick={this.handleClick('signup')}>
            <span>Get Started</span></button>
          <button
            className="home-butt login"
            onClick={this.handleClick('login')}>
            <span>Log In</span></button>
        </div>
      </div>
    );
  }
}

export default Home;
