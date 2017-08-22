```js
{
  entities : {
    users: {
      1: {
        id: 1,
        username: 'calvinjee',
        email: 'calvin@gmail.com',
        first_name: 'calvin',
        last_name: 'jee',
        profile_pic_url: 'http://profile.pic.url',
        bio: 'whats up',
        follower_ids: [2, 3, 4],
        following_ids: [3, 4],        
        post_ids: [1, 2, 3],
        followed_post_ids: [4, 5, 6],
      },
      2: {
        id: 2,
        username: 'tumblruser',
        email: 'user@tumblr.com',
        first_name: 'tumblr',
        last_name: 'usr',
        profile_pic_url: 'http://tumblr.user.profile/pic',
        bio: 'interesting bio',
        follower_ids: [1, 3, 5],
        following_ids: [1, 3, 7],
        post_ids: [1, 2, 3],
        followed_post_ids: [4, 5, 6],
      }
      ...
    },
    posts: {
      1: {
        id: 1,
        user_id: 1,
        title: 'this is a title',
        content: 'this is a text post',
        caption: null,
        content_type: 'text',
        created_at: '2017-07-25 00:00:00',
        liker_ids: [2, 3, 4],
        current_user_likes: false,
      },
      2: {
        id: 2,
        user_id: 3,
        title: null,
        content: 'https://some.linkto.img/stored/on/server',
        caption: 'caption for image above',
        content_type: 'img',
        created_at: '2017-07-25 00:00:00',
        liker_ids: [1, 4, 5],
        current_user_likes: false,
      },
      3: {
        id: 3,
        user_id: 2,
        title: 'check this video out',
        content: 'https://video.url/or/embed/url',
        caption: null,
        content_type: 'vid',
        created_at: '2017-07-25 00:00:00',
        liker_ids: [7, 8, 9],
        current_user_likes: true,
      },
      ...
    },
  },
  session: {
    currentUser: {
      id: 1,
      username: 'thecurrentuser',
      email: 'email@address',
      liked_post_ids: [1, 2, 3],
      following_post_ids: [1 ,3 ,5],
    }
  }
}
```
