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
  let contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  let processData = true;
  if (postData instanceof FormData) {
    contentType = false;
    processData = false;
  }

  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    contentType: contentType,
    processData: processData,
    data: postData
  });
};

export const updatePost = (postData) => {
  let contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  let processData = true;
  if (postData instanceof FormData) {
    contentType = false;
    processData = false;
    }

  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${parseInt(postData.get('post[id]'))}`,
    contentType: contentType,
    processData: processData,
    data: postData
  });
};

export const destroyPost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  });
};
