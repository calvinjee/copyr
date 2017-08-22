class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(params[:id])
    render :show
  end

  def update
    @user = User.find_by(params[:id])
    if @user.update(user_params)
      render :json
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
