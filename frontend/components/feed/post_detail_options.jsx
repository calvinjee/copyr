import React from 'react';
import { Link } from 'react-router-dom';

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
        this.props.deletePost(this.props.post.id);
      } else {
        this.props.postFormModal(this.props.post.content_type, this.props.post.id);
      }
    };
  }

  showDropdown(dropdown) {
    return (e) => {
      e.stopPropagation();
      this.props.dropdownModal(dropdown, this.props.post.id);
    };
  }

  closeModal(e) {
    this.props.closeModal();
  }

  render () {
    let lastButton = <i className="fa fa-heart-o" aria-hidden="true"></i>;
    if (this.props.post.author_id === this.props.currentUser.id) {
      lastButton = (
          <button
            onClick={this.showDropdown('postEdit')}>
            <i className="fa fa-cog" aria-hidden="true"></i>
          </button>
      );
    }

    return (
      <div className="post-footer">
        <div>Notes</div>
        <div className="post-options">
          <i className="fa fa-retweet" aria-hidden="true"></i>
          { lastButton }
          <div
            className="options-dropdown">
            <ul
              onClick={(e) => e.stopPropagation()}
              className={(this.props.dropdown === 'postEdit' && this.props.editPostId === this.props.post.id) ?
                "edit-options" :
                "hidden"}>
              <Link to={`/edit/${this.props.post.id}`} onClick={this.handleOption('edit')}><li><span>Edit</span></li></Link>
              <li onClick={this.handleOption('delete')}><span>Delete</span></li>
            </ul>
          </div>
        </div>
        <div
          className={(this.props.dropdown === 'postEdit' && this.props.editPostId === this.props.post.id) ?
            "dropdown-modal" :
            "hidden"}
          onClick={this.closeModal} />
      </div>
    );
  }
}

export default PostDetailOptions;
