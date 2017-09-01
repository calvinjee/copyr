# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'metainspector'

User.destroy_all
Post.destroy_all
Like.destroy_all
Follow.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('posts')
ActiveRecord::Base.connection.reset_pk_sequence!('follows')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')

time_array = []
time = Time.new
100.times do
  time_array.push(time)
  time -= 10000
end

User.create!(email: 'clavinjee@gmail.com', password: 'password', username: 'clavinjee')
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/abott@adorablasdfsadaae.io.png")
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/fa.png")
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/faasdfsd.png")
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/calvasdfvwwa.png")
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/owqiffc.png")
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/98ds00-72fcadf.png")
User.create!(email: Faker::Internet.unique.safe_email, password: 'password', username: Faker::HeyArnold.character, bio: Faker::Hipster.words(2).join(' '), image: "https://api.adorable.io/avatars/65/asdfkjsahp.png")

images = File.open('./sample/pics.txt').readlines
ytvids = File.open('./sample/ytvids.txt').readlines
links = File.open('./sample/links.txt').readlines
gifs = File.open('./sample/gifs.txt').readlines

images.each do |image|
  post = image.strip.split(",")
  content_type = 'image'
  author_id = User.all.sample.id
  link_url = post[0]
  if post[1] == ""
    text_content = nil
  else
    text_content = "<p>#{post[1]}</p>"
  end

  Post.create!(
    author_id: author_id,
    link_url: link_url,
    text_content: text_content,
    content_type: content_type,
    created_at: time_array.sample
  )
end

gifs.each do |image|
  post = image.strip.split(",")
  content_type = 'image'
  author_id = User.all.sample.id
  link_url = post[0]
  if post[1] == ""
    text_content = nil
  else
    text_content = "<p>#{post[1]}</p>"
  end

  Post.create!(
    author_id: author_id,
    link_url: link_url,
    text_content: text_content,
    content_type: content_type,
    created_at: time_array.sample
  )
end

ytvids.each do |video|
  post = video.strip
  content_type = 'video'
  author_id = User.all.sample.id
  link_url = post

  Post.create!(
    author_id: author_id,
    link_url: link_url,
    content_type: content_type,
    created_at: time_array.sample
  )
end

links.each do |link|
  post = link.strip
  content_type = 'link'
  author_id = User.all.sample.id
  link_url = post
  page = MetaInspector.new(link_url)
  image_file_name = page.images.best
  link_host = page.host
  title = page.best_title
  caption = page.best_description

  Post.create!(
    author_id: author_id,
    link_url: link_url,
    content_type: content_type,
    image_file_name: image_file_name,
    link_host: link_host,
    title: title,
    caption: caption,
    created_at: time_array.sample
  )
end

2.times do
  title = Faker::Seinfeld.quote
  text_content = Faker::Seinfeld.character
  author_id = User.all.sample.id
  content_type = 'quote'

  Post.create!(
    author_id: author_id,
    content_type: content_type,
    title: title,
    text_content: text_content,
    created_at: time_array.sample
  )
end
2.times do
  title = Faker::RickAndMorty.quote
  text_content = Faker::RickAndMorty.character
  author_id = User.all.sample.id
  content_type = 'quote'

  Post.create!(
    author_id: author_id,
    content_type: content_type,
    title: title,
    text_content: text_content,
    created_at: time_array.sample
  )
end
2.times do
  title = Faker::FamilyGuy.quote
  text_content = Faker::FamilyGuy.character
  author_id = User.all.sample.id
  content_type = 'quote'

  Post.create!(
    author_id: author_id,
    content_type: content_type,
    title: title,
    text_content: text_content,
    created_at: time_array.sample
  )
end
2.times do
  title = Faker::MostInterestingManInTheWorld.quote
  text_content = 'The most interesting man in the world'
  author_id = User.all.sample.id
  content_type = 'quote'

  Post.create!(
    author_id: author_id,
    content_type: content_type,
    title: title,
    text_content: text_content,
    created_at: time_array.sample
  )
end

15.times do
  Follow.create(followee_id: User.all.sample.id, follower_id: User.all.sample.id)
end

25.times do
  Like.create(user_id: User.all.sample.id, post_id: Post.all.sample.id)
end
