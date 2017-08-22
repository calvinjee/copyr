class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
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
