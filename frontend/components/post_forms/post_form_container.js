import React from 'react';
import { connect } from 'react-redux';
import { addPost, revisePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.post) {
    return {
      currentUser: state.session.currentUser,
      modalOpen: state.ui.modalOpen,
      id: ownProps.post.id,
      authorId: ownProps.post.author_id,
      contentType: ownProps.content_type,
      title: ownProps.post.title,
      textContent: ownProps.post.text_content,
      content_url: ownProps.post.content_url,
    };
  } else {
    return {
      currentUser: state.session.currentUser,
      modalOpen: state.ui.modalOpen,
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    revisePost: (post) => dispatch(revisePost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
