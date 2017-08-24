import React from 'react';
import TextForm from './text_form';


class PostButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(postType) {
    let postModalAction;
    switch(postType) {
      case 'text':
        postModalAction = this.props.textModal;
    }

    return (e) => {
      e.preventDefault();
      postModalAction();
    };
  }

  render() {
    let form;
    switch(this.props.postType) {
      case 'text':
        form = <TextForm />;
      default:
        form = null;
    }

    return(
      <ul>
        <li>
          <button onClick={this.handleClick('text')}>
            <i>Aa</i>
            <span>Text</span>
          </button>
          <button>
            <i>""</i>
            <span>Quote</span>
          </button>
        </li>
        { form }
      </ul>
    );
  }
}

export default PostButtons;
