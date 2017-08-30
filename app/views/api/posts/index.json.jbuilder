posts = @followed_users_posts.concat(@current_user_posts)
json.posts do
  posts.each do |post|
    json.set!(post.id) do
      json.extract! post, :id, :author_id, :text_content, :title, :content_type
      case post.content_type
      when 'link'
        json.link_url post.link_url
        json.image_url post.image_file_name
        json.link_host post.link_host
        json.caption post.caption
      when 'image'
        json.image_url asset_path(post.image.url)
      when 'video'
        json.video_url asset_path(post.video.url)
      when 'audio'
        json.audio_url asset_path(post.audio.url)
      end
      json.liked_by post.likes.pluck(:user_id)
    end
  end
end

json.users do
  posts.each do |post|
    json.set!(post.author.id) do
      json.id post.author.id
      json.username post.author.username
      json.avatar_url asset_path(post.author.image.url)
      json.bio post.author.bio
      json.followed_by post.author.follows.pluck(:follower_id)
    end
  end
  @recommended_users.each do |user|
    json.set!(user.id) do
      json.username user.username
      json.avatar_url asset_path(user.image.url)
      json.bio user.bio
    end
  end
end

# followed_post_ids = @followed_users_posts.nil? ? [] : @followed_users_posts.ids
# current_user_post_ids = @current_user_posts.nil? ? [] : @current_user_posts.ids

json.followedPostIds @followed_users_posts.pluck(:id)
json.curUserPostIds @current_user_posts.pluck(:id)
json.likedPostIds @current_user_liked_posts
json.recommendedUserIds (@recommended_users.map(&:id))
