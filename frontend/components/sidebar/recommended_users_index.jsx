import React from 'react';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/follow_actions';
import RecommendedUsersIndexItem from './recommended_users_index_item';


const RecommendedUsersIndex = (props) => {
  const recommendedUsers = props.recommendedUserIds.map((id) => {
    return (<RecommendedUsersIndexItem user={props.users[id]} />);
  });

  return (
    <div className="recommended-blogs">
      <h4>RECOMMENDED BLOGS</h4>
      <ul>
        { recommendedUsers }
      </ul>
    </div>
  );

};


const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    recommendedUserIds: state.dashboard.recommendedUserIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedUsersIndex);
