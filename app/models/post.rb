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

  has_attached_file :image, default_url: nil
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  # validates_attachment :image,
  #   content_type: { content_type: /\Aimage\/.*\z/ },
  #   size: { in: 0..10.kilobytes }

  has_attached_file :video, default_url: nil
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  has_attached_file :audio, default_url: nil
  # validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/
  # validates_attachment_file_name :audio, matches: [/mp3\z/]
  validates_attachment :audio,
    content_type: { content_type: ["audio/mpeg", "audio/mp3"] },
    file_name: { matches: [/mp3\Z/] }

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

end
