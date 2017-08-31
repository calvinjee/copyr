# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Post.destroy_all
Like.destroy_all
Follow.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('posts')
ActiveRecord::Base.connection.reset_pk_sequence!('follows')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')


User.create!(email: 'clavinjee', password: 'password', username: 'clavinjee')

30.times do
  User.create!(email: Faker::Internet.unique.email, password: 'password', username: Faker::Name.unique.name)




10.times do
  Post.create!(
    author_id: User.all.sample.id,
    title: Faker::TheFreshPrinceOfBelAir.character,
    text_content: Faker::TheFreshPrinceOfBelAir.quote,
    caption: Faker::TheFreshPrinceOfBelAir.celebrity,
    content_type: 'text'
  )
end
