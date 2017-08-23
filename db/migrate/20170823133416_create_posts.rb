class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.string :title
      t.string :caption
      t.string :content_type, null: false
      t.text :text_content

      t.timestamps null: false
    end

    add_index :posts, :author_id
    add_index :posts, :content_type
  end
end
