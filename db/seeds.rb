# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

user1 = User.create!(email: 'calvin', password: 'password', username: 'cj')
user2 = User.create!(email: 'tester1', password: 'password', username: 'tester1')
user3 = User.create!(email: 'tester2', password: 'password', username: 'tester2')
user4 = User.create!(email: 'tester3', password: 'password', username: 'tester3')

Post.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('posts')

# text posts
10.times do
  Post.create!(
    author_id: User.all.sample.id,
    title: Faker::TheFreshPrinceOfBelAir.character,
    text_content: Faker::TheFreshPrinceOfBelAir.quote,
    caption: Faker::TheFreshPrinceOfBelAir.celebrity,
    content_type: 'text'
  )
end
