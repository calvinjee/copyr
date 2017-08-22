export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user: user }
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user: user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};

// export const updateUser = (currentUser) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `api/users/${currentUser.id}`,
//     data: { user: currentUser }
//   });
// };
