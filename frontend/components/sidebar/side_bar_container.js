import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  return {
    posts: state.entities.posts,
    users: state.entities.users,
    recommendedUserIds: state.dashboard.recommendedUserIds,
    radarPostId: state.dashboard.radarPostId,
    followedUserIds: state.dashboard.followedUserIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (followeeId) => dispatch(followUser(followeeId)),
    unfollowUser: (followeeId) => dispatch(unfollowUser(followeeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
