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
#  link_url           :string
#  link_host          :string
#

class Post < ActiveRecord::Base
  validates :author, :content_type, presence: true
  validates :content_type, inclusion: {
    in: %w(text image quote link chat audio video),
    message: "%{value} is not a valid content type"
  }
  validates :text_content, present: true, if: :is_type?('text')

  # custom validation for requiring a file if they click on img/audio/video
  # custom validation for text... require at least 1 character when content type is text
  # rails conditional validation

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  # validates_attachment :image,
  #   content_type: { content_type: /\Aimage\/.*\z/ },
  #   size: { in: 0..10.kilobytes }

  has_attached_file :video
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  has_attached_file :audio
  # validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/
  # validates_attachment_file_name :audio, matches: [/mp3\z/]
  validates_attachment :audio,
    content_type: { content_type: ["audio/mpeg", "audio/mp3"] },
    file_name: { matches: [/mp3\Z/] }

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  has_many :likes

  has_many :liked_users,
    through: :likes,
    source: :user

  def is_type?(content)
    self.content_type == content
  end

end
