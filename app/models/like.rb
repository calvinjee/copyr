class Like < ActiveRecord::Base
  validates :user, :post, presence: true
  validates :post, uniqueness: { scope: :user }

  belongs_to :user
  belongs_to :post

end
