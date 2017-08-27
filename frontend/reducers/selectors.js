import { values } from 'lodash';

export const postsArray = (posts) => {
  return values(posts).sort().reverse();
};
