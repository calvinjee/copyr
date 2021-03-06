# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  first_name         :string
#  last_name          :string
#  bio                :string
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://s3.amazonaws.com/copyr-dev/users/images/default_avatar/bat_avatar.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :posts,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :author_id,
    dependent: :destroy

  has_many :follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :followee_id,
    dependent: :destroy

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :followings,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :follower_id,
    dependent: :destroy

  has_many :followed_users,
    through: :followings,
    source: :followee

  has_many :likes,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :post

  attr_reader :password

  after_initialize :ensure_session_token

  def self.follower_ids(user)
    user.followers.pluck(:id)
  end

  def self.followed_user_ids(user)
    user.followed_users.pluck(:id)
  end

  def self.recommended_users(user)
    User
      .where.not(id: user.id)
      .where.not(id: user.followed_users)
      .order('RANDOM()').limit(4)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
