import React from 'react';
import PostDetail from './post_detail';
import PostDetailOptionsContainer from './post_detail_options_container';
import { Route } from 'react-router-dom';
import TextForm from '../post_forms/text_form';
import ImageForm from '../post_forms/image_form';
import VideoForm from '../post_forms/video_form';
import QuoteForm from '../post_forms/quote_form';
import ChatForm from '../post_forms/chat_form';
import LinkForm from '../post_forms/link_form';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const avatar = { backgroundImage: `url(${this.props.user.avatar_url})` };

    let editForm, avatarLift, formModal, hideDetail;
    if (this.props.postType && this.props.editPostId === this.props.post.id) {
      formModal = 'form-modal';
      avatarLift = 'cu-avatar';
      hideDetail = 'hidden';

      switch(this.props.postType) {
        case 'text':
          editForm = <TextForm post={this.props.post} pullUp='pullUp' contentType='text' />;
          break;
        case 'image':
          editForm = <ImageForm post={this.props.post} pullUp='pullUp' contentType='image' />;
          break;
        case 'quote':
          editForm = <TextForm post={this.props.post} pullUp='pullUp' contentType='quote' />;
          break;
        case 'link':
          editForm = <LinkForm post={this.props.post} pullUp='pullUp' contentType='link' />;
          break;
        case 'chat':
          editForm = <TextForm post={this.props.post} pullUp='pullUp' contentType='chat' />;
          break;
        case 'audio':
          editForm = <AudioForm post={this.props.post} />;
          break;
        case 'video':
          editForm = <ImageForm post={this.props.post} pullUp='pullUp' contentType='video' />;
          break;
      }
    }


    // <PostDetail post={this.props.post} hideDetail={hideDetail} />


    return (
      <li>
        <div className={`avatar sticky-avatar ${avatarLift}`}>
          <div className="avatar-img"
            style={avatar} />
        </div>
        <Route path="/dashboard" component={(props) => <PostDetail post={this.props.post} />} />
        <Route path="/edit/:id" component={(props) => <PostDetail post={this.props.post} hideDetail={hideDetail} />} />
        { editForm }
        <div className={formModal} />
      </li>
    );
  }

}

export default PostIndexItem;
