class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end


  def follow
    @follow = Follow.new(followee_id: params[:user_id], follower_id: current_user.id)
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @follow = Follow.find_by(followee_id: params[:user_id], follower_id: current_user.id)
    @follow.destroy
    render json: @follow
  end


  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :first_name,
      :last_name,
      :bio
    )
  end

end
