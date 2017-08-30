export const likePost = (postId) => {
  return $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/likes`
  });
};

export const unlikePost = (postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/likes`
  });
};
