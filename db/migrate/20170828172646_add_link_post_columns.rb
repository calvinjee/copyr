class AddLinkPostColumns < ActiveRecord::Migration
  def change
    add_column :posts, :link_url, :string
    add_column :posts, :link_host, :string
  end
end
