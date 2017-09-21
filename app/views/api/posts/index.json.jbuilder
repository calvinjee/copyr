posts = @followed_users_posts.concat(@current_user_posts)
# .push(@radar_post)



json.posts do
  posts.each do |post|
    json.set!(post.id) do
      json.extract! post, :id, :author_id, :text_content, :title, :content_type, :link_url
      case post.content_type
      when 'link'
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
      liked_by = []
      post.likes.each { |like| liked_by.push(like.user_id) }
      json.liked_by liked_by
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
  # @recommended_users.each do |user|
  #   json.set!(user.id) do
  #     json.id user.id
  #     json.username user.username
  #     json.avatar_url asset_path(user.image.url)
  #     json.bio user.bio
  #   end
  # end
  # radar_author = @radar_post.author
  # json.set!(radar_author.id) do
  #   json.id radar_author.id
  #   json.username radar_author.username
  #   json.avatar_url asset_path(radar_author.image.url)
  #   json.bio radar_author.bio
  # end
end

json.followedPostIds @followed_users_posts.pluck(:id)
json.curUserPostIds @current_user_posts.pluck(:id)
json.likedPostIds @current_user_liked_posts
# json.recommendedUserIds @recommended_users.map(&:id)
# json.radarPostId @radar_post.id
# json.followerIds @follower_ids
# json.followedUserIds @followed_user_ids
