# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  author_id    :integer          not null
#  title        :string
#  caption      :string
#  content_type :string           not null
#  text_content :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Post < ActiveRecord::Base
end
