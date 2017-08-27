import React from 'react';
import PostDetail from './post_detail';
import PostDetailOptionsContainer from './post_detail_options_container';
import { Route } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const avatar = { backgroundImage: `url(${this.props.user.avatar_url})` };

    let editForm, formModal, hideDetail;
    if (this.props.editForm) {
      // editForm = React.cloneElement(this.props.editForm, {post: this.props.post });
      formModal = 'form-modal';
      hideDetail = 'hidden';
    }

    switch(this.props.content_type) {
      case 'text':
        editForm = <TextForm post={this.props.post} />;
        break;
      case 'image':
        editForm = <ImageForm post={this.props.post} />;
        break;
      case 'quote':
        editForm = <QuoteForm post={this.props.post} />;
        break;
      case 'link':
        editForm = <LinkForm post={this.props.post} />;
        break;
      case 'chat':
        editForm = <ChatForm post={this.props.post} />;
        break;
      case 'audio':
        editForm = <AudioForm post={this.props.post} />;
        break;
      case 'video':
        editForm = <VideoForm post={this.props.post} />;
        break;
    }

    // <PostDetail post={this.props.post} hideDetail={hideDetail} />

    return (
      <li>
        <div className="avatar sticky-avatar">
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
