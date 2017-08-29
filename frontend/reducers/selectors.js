import { values } from 'lodash';

export const postsArray = (posts, dashboard) => {
  // return values(posts).sort().reverse();
  // if (feedPostIds === undefined) {
  //   return [];
  // } else {
    const feedPostIds = dashboard.followedPostIds.concat(dashboard.curUserPostIds).sort().reverse();
    const feedPosts = [];

    


    feedPostIds.forEach((id) => {
      feedPosts.push(posts[id]);
    });

    return feedPosts;
  // }

};
