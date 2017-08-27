import React from 'react';


class PostDetailOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  handleOption(option) {
    return (e) => {
      if (option === 'delete') {
        this.props.deletePost(this.props.post.id).then(() => {
          document.removeEventListener('click', this.closeModal);
        });
      } else {
        console.log('need to edit');
      }
    };
  }

  showDropdown(dropdown) {
    return (e) => {
      this.props.dropdownModal(dropdown, this.props.post.id);
      document.addEventListener('click', this.closeModal);
    };
  }

  closeModal(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.props.closeModal();
    document.removeEventListener('click', this.closeModal);
  }

  render () {
    let lastButton = <button>HEART</button>;
    if (this.props.post.author_id === this.props.currentUser.id) {
      lastButton = (
        <button
          onClick={this.showDropdown('postEdit')}>
          <span>Gear</span>
        </button>
      );
    }

    return (
      <div className="post-options">
        <p>b1</p>
        <p>b2</p>
        <p>b3</p>
        { lastButton }
        <div className="options-dropdown">
          <ul
            ref={node => { this.node = node; }}
            className={(this.props.dropdown === 'postEdit' && this.props.editPostId === this.props.post.id) ?
              "edit-options" :
              "hidden"}>
            <li onClick={this.handleOption('edit')}><span>Edit</span></li>
            <li onClick={this.handleOption('delete')}><span>Delete</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostDetailOptions;
