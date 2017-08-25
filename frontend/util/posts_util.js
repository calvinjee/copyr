export const fetchAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts'
  });
};

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

export const createPost = (postData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    contentType: false,
    processData: false,
    data: postData
  });
};

export const updatePost = (postData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${postData.id}`,
    contentType: false,
    processData: false,
    data: { post: postData }
  });
};

export const destroyPost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  });
};
