# [Copyr][heroku]
[heroku]: http://www.herokuapp.com

Inspired by the microblogging and social networking website Tumblr, Copyr is a full stack web application built using Ruby on Rails, a PostgreSQL database, and the React and Redux open-source libraries. Copyr allows users to share all forms of content through seven different types of posts. Posts are primarily viewed on the user's dashboard where he/she can 'like' posts as well as 'follow' other users.

## Features & Implementation

### Posts
There are seven types of posts available to the user, all of which are held in a single table and identified by that post's content type: `text`, `image`, `quote`, `link`, `chat`, `audio`, and `video`. Some attributes in the table are shared while others remain unique to the type of post. For example `text_body`, is shared across all posts which represents any (rich) text commentary the user would like to add to his/her post. Additionally with the help of the `paperclip` gem, `image`, `audio`, and `video` each hold their own columns for file uploads.

Forms for each type are necessary to take in user input. A form is rendered by its own presentational component but share one `PostFormContainer` as each need access to the same props from state as well as the same dispatch functions. Once the form is submitted, a post is automatically rendered on the user's dashboard through the `PostDetail` component. This component is responsible for handling what parts of the `posts` table to render based on the type.

### Likes
As with many social media websites, users have the ability to 'like' other posts directly on the feed. Liking a post will increase that individual post's 'note' count, which represents the total number of 'likes' and 'reblogs' (to come). If the post belongs to the logged in user, the user will have the ability to edit or delete the post rather than to like it.

### Follows
Following users is also an integral part of any social platform. Users can be followed 
