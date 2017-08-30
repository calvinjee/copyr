import React from 'react';
import SideBarContainer from './side_bar_container';
import RecommendedUsersIndexItem from './recommended_users_index_item';
import PostDetail from '../feed/post_detail';


const Radar = (props) => {
  if (props.radarPostId === null) return null;

  const post = props.posts[props.radarPostId];
  const user = props.users[post.author_id];

  return (
    <div className="recommended-blogs">
      <h5>RADAR</h5>
      <ul>
        <RecommendedUsersIndexItem
          post={post}
          user={user}
          followedUserIds={props.followedUserIds} />
      </ul>
      <PostDetail post={post} user={user} miniKlass="detail-mini"/>
    </div>
  );

};


export default SideBarContainer(Radar);
