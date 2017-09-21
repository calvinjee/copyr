import { values } from 'lodash';

export const postsArray = (posts, dashboard) => {
    const feedPostIds = dashboard.followedPostIds.concat(dashboard.curUserPostIds).sort((a, b) => b - a);
    console.log('feedposts')
    console.log(feedPostIds)
    const feedPosts = [];
    feedPostIds.forEach((id) => {
      feedPosts.push(posts[id]);
    });

    return feedPosts;
};
