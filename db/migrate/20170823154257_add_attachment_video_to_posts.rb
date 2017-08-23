class AddAttachmentVideoToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :video
    end
  end

  def self.down
    remove_attachment :posts, :video
  end
end
