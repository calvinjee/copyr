# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `GET /api/users/:id`
- `PATCH /api/users`

### Users/Follows
- `POST /api/users/:followeeId/follows`
- `DELETE /api/users/:followeeId/follows`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Posts/Likes

- `POST /api/posts/:postId/likes`
- `DELETE /api/posts/:postId/likes`
