export const fetchAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};
//
// export const receiveFivePosts = () => {
//   return $.ajax({
//     method: 'GET',
//     url: 'api/posts',
//     data: {}
//   });
// };

export const fetchSinglePost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  });
};

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: { post: post }
  });
};
