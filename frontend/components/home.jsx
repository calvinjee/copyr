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
      <div>
        <h2>copyr.</h2>
        <h4>Come for what you love. Stay for what you discover.</h4>
        { form }
        <button onClick={this.handleClick('signup')}>Get Started</button>
        <button onClick={this.handleClick('login')}>Log In</button>
      </div>
    );
  }
}

export default Home;
