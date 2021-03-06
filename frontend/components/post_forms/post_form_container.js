import React from 'react';
import { connect } from 'react-redux';
import { addPost, revisePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
import { resetErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.post) {
    return {
      currentUser: state.session.currentUser,
      errors: state.session.errors,
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
      errors: state.session.errors,
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
    action: (post) => dispatch(action(post)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
