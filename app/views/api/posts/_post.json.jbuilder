json.post do
  json.extract! post, :id, :author_id, :title, :text_content, :content_type, :link_url
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
  json.liked_by post.likes.pluck(:user_id)
end

json.user do
  json.id post.author.id
  json.username post.author.username
  json.avatar_url asset_path(post.author.image.url)
  json.followed_by post.author.follows.pluck(:follower_id)
end
