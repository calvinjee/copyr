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
  validate :has_body, if: :is_type_text?
  validate :has_quote, if: :is_type_quote?
  validate :has_link, if: :is_type_link?
  validate :has_file, if: :is_type_audio?
  validate :has_link_or_file, if: :is_type_image_or_video?

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

  def self.followed_users_posts(user)
    Post.includes(:likes)
      .where(author_id: user.followed_users)
      .order(created_at: :desc)
  end

  def self.current_user_posts(user)
    Post.includes(:likes)
      .where(author_id: user.id)
      .order(created_at: :desc)
  end

  def self.liked_post_ids(user)
    user.likes.pluck(:post_id)
  end

  def self.radar_post(user)
    Post
      .where.not(author_id: user.id)
      .where.not(id: user.followed_users)
      .order('RANDOM()')
      .limit(1).first
  end

  private

  def has_body
    errors.add(:base, "Body can't be blank") if self.text_content.empty?
  end

  def has_quote
    errors.add(:base, "Quote can't be blank") if self.title.empty?
  end

  def has_link
    errors.add(:base, "Cannot post without a link") if self.link_url.empty?
  end

  def has_file
    if self.audio.url.include?('missing')
      errors.add(:base, "Cannot post without file")
    end
  end

  def has_link_or_file
    if self.link_url.nil? &&
      self.image.url.include?('missing') &&
      self.video.url.include?('missing')
        errors.add(:base, "Cannot post without link/file")
    end
  end

  def is_type_text?
    self.content_type == 'text'
  end

  def is_type_quote?
    self.content_type == 'quote'
  end

  def is_type_image_or_video?
    self.content_type == 'image' || self.content_type == 'video'
  end

  def is_type_image?
    self.content_type == 'image'
  end

  def is_type_video?
    self.content_type == 'video'
  end

  def is_type_audio?
    self.content_type == 'audio'
  end

  def is_type_link?
    self.content_type == 'link'
  end

end
