import React from 'react';
import TextForm from './text_form';


class PostButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  showForm(postType) {
    return (e) => {
      e.preventDefault();
      this.props.postFormModal(postType);
    };
  }

  render() {
    let form = null;
    switch(this.props.postType) {
      case 'text':
        form = <TextForm />;
    }

    return(
      <ul>
        <li>
          <button onClick={this.showForm('text')}>
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
