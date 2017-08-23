json.extract! user, :id, :username, :email, :first_name, :last_name, :bio
json.image_url asset_path(user.image.url)
