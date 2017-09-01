import React from 'react';
import { connect } from 'react-redux';
import { addPost, revisePost } from '../../actions/post_actions';
import { closeModal, showLoader, removeLoader } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.post) {
    return {
      currentUser: state.session.currentUser,
      modalOpen: state.ui.modalOpen,
      id: parseInt(ownProps.match.params.id),
      title: ownProps.post.title,
      textContent: ownProps.post.text_content,
      imageUrl: ownProps.post.image_url,
      videoUrl: ownProps.post.video_url,
      audioUrl: ownProps.post.audio_url,
      linkUrl: ownProps.post.link_url,
      contentType: ownProps.post.content_type,

    };
  } else {
    return {
      currentUser: state.session.currentUser,
      modalOpen: state.ui.modalOpen,
      id: null,
      title: '',
      textContent: '',
      imageUrl: null,
      videoUrl: null,
      audioUrl: null,
      linkUrl: '',
      contentType: ownProps.contentType,
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.post ? revisePost : addPost;

  return {
    // addPost: (post) => dispatch(addPost(post)),
    // revisePost: (post) => dispatch(revisePost(post)),
    action: (post) => dispatch(action(post)),
    closeModal: () => dispatch(closeModal()),
    showLoader: () => dispatch(showLoader()),
    removeLoader: () => dispatch(removeLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
