# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ActiveRecord::Base
  validates :follower, :followee, presence: true
  validates :followee, uniqueness: { scope: :follower }
  validate :check_followee_follower

  belongs_to :follower,
    class_name: :User,
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: :User,
    primary_key: :id,
    foreign_key: :followee_id

  def self.is_followed?(followee_id, current_user_id)
    Follow.find_by(followee_id: followee_id, follower_id: current_user_id) ?
      true :
      false
  end

  def check_followee_follower
    errors.add(:follower, "can't follow self") if follower_id == followee_id
  end

end
