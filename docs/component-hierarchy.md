## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**Dashboard**
 - NavContainer
  + SearchContainer
  + ActivityInfoContainer
 - PostFormContainer
 - PostIndexContainer
 - RecommendedBlogContainer
 - RadarContainer

**NavContainer**
 - NavBar
  + Search
 - AccountInfoContainer
  + AccountInfo

**PostFormContainer**
 - PostFormBar
  + TextPostForm
  + ImagePostForm
  + QuotePostForm
  + LinkPostForm
  + ChatPostForm
  + MusicPostForm
  + VideoPostForm

**PostIndexContainer**
 - PostIndex
  + PostIndexItem
    + PostIndexItemDetail

**RecommendedBlogContainer**
 - RecommmendedBlogIndex
  + BlogItem

**RadarContainer**
 - Radar
  + BlogItem
  + PostIndexItemDetail

**AccountInfoContainer**
 - AccountInfo

**SearchContainer**
 - SearchResults


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthContainer" |
| "/dashboard" | "Dashboard" |
| "/edit/:id" | "TypePostForm" |
| "/new/:type" | "TypePostForm" |
