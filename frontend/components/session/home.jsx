import React from 'react';
import SessionFormContainer from './session_form_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: '', search: '', searchIcon: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(form) {
    return (e) => {
      e.preventDefault();
      this.setState({ form: form });
    };
  }

  handleChange(input) {
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleGuestLogin(e) {
    this.props.login({email: 'clavinjee@gmail.com', password: 'password'});
  }

  render () {
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
        <div className="home-nav">
          <h3 className="nav-logo">c</h3>
          <i className={`fa fa-search home-search-icon ${this.state.searchIcon}`} aria-hidden="true"></i>
          <input
            type="text"
            className="home-search"
            placeholder="Search Copyr"
            value={this.state.search}
            onFocus={() => this.setState({ searchIcon: 'home-search-focus' })}
            onBlur={() => this.setState({ searchIcon: '' })}
            onChange={this.handleChange('search')} />
        </div>
        <div className="home-mid">
          <h2 className="home-logo">copyr.</h2>
          <p className="home-desc">If you're looking for original content</p>
          <p className="home-desc">This is the place.</p>
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
