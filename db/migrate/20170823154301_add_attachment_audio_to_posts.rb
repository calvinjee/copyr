class AddAttachmentAudioToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :posts, :audio
  end
end
