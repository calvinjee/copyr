# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `GET /api/users`
- `POST /api/users`
- `GET /api/users/:id`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Follows

- `POST /api/follows/:followeeId`
- `DELETE /api/follows/:followeeId`

### Likes

- `POST /api/posts/:postId/likes`
- `DELETE /api/posts/:postId/likes`
