import React from 'react';
import FormContainer from './form_container';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p className="username-head"></p>
      </div>
    );
  }
}

// TODO: ask if this is okay
export default FormContainer(TextForm);
