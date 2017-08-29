class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :likes, [:post_id, :user_id], unique: true
    add_index :likes, :user_id
  end
end
