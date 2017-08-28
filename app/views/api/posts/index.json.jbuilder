json.set! :posts do
  @posts.each do |post|
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
    end
  end
end

json.set! :users do
  @posts.each do |post|
    json.set!(post.author.id) do
      json.id post.author.id
      json.username post.author.username
      json.avatar_url asset_path(post.author.image.url)
    end
  end
end
