import React from 'react';
import SideBarContainer from './side_bar_container';
import RecommendedUsersIndexItem from './recommended_users_index_item';


const RecommendedUsersIndex = (props) => {
  const recommendedUsers = props.recommendedUserIds.map((id) => {
    return (
      <RecommendedUsersIndexItem
        key={id}
        user={props.users[id]}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
       />);
  });

  return (
    <div className="recommended-blogs">
      <h5>RECOMMENDED BLOGS</h5>
      <ul>
        { recommendedUsers }
      </ul>
    </div>
  );

};

export default SideBarContainer(RecommendedUsersIndex);
