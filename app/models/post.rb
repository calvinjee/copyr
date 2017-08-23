# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  title              :string
#  caption            :string
#  content_type       :string           not null
#  text_content       :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  video_file_name    :string
#  video_content_type :string
#  video_file_size    :integer
#  video_updated_at   :datetime
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Post < ActiveRecord::Base
  validates :author_id, :content_type, presence: true
  validates :content_type, inclusion: {
    in: %w(text image quote link chat audio video),
    message: "%{value} is not a valid content type"
  }

  

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

end
