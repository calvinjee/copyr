import { values } from 'lodash';

export const postsArray = (posts, feedPostIds) => {
  // return values(posts).sort().reverse();
  // if (feedPostIds === undefined) {
  //   return [];
  // } else {
  
    const feedPosts = [];

    feedPostIds.sort().reverse().forEach((id) => {
      feedPosts.push(posts[id]);
    });

    return feedPosts;
  // }

};
