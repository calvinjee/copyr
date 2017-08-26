json.set! :post do
  json.extract! post, :id, :author_id, :title, :caption, :content_type
  case post.content_type
  when 'text' || 'quote' || 'chat'
    json.text_content post.text_content
    # json.image_url nil
    # json.video_url nil
    # json.audio_url nil
  when 'image'
    # json.text_content nil
    json.image_url asset_path(post.image.url)
    # json.video_url nil
    # json.audio_url nil
  when 'video'
    # json.text_content nil
    # json.image_url nil
    json.video_url asset_path(post.video.url)
    # json.audio_url nil
  when 'audio'
    # json.text_content nil
    # json.image_url nil
    # json.video_url nil
    json.audio_url asset_path(post.audio.url)
  end
end

json.set! :user do
  json.id post.author.id
  json.username post.author.username
  json.avatar_url asset_path(post.author.image.url)
end
