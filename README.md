# copyr

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/3tWNvmkN/aafullstacktumblrclone

## Minimum Viable Product

copyr is a web application inspired by tumblr built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Posts by type: text, photo, quote, link, chat, audio, video
- [ ] Likes
- [ ] Follows
- [ ] Infinite Scroll

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Posts Model, API, and components (4 days)

**Objective:** All types of posts can be created, read, edited and destroyed through
the API.

### Phase 3: Follows (1 day)

**Objective:** Users can follow and unfollow other users through the API.

### Phase 4: Likes (1 day)

**Objective:** Users can like and unlike posts through the API.

### Phase 5: - Infinite scroll for PostsIndex/Dashboard and polished styling (1)

**Objective:** Add infinite scroll to PostsIndex/Dashboard and polish styling.

### Phase 6: - Refactoring (1)

**Objective:** Refactor and optimize code i.e rid of n + 1 queries.

### Bonus Features (TBD)
- [ ] Reblogging
- [ ] Components for exploring all posts and specific types of posts
- [ ] Component for a user show page
- [ ] Comments
- [ ] Allow ability for complex posts (multiple types) and rich text editing
- [ ] Tags
