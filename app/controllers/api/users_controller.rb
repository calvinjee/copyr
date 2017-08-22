class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
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

  # def update
  #   if current_user
  #     if current_user.update(user_params)
  #       render json: current_user
  #     else
  #       render json: current_user.errors.full_messages, status: 422
  #     end
  #   else
  #     render json: ['Need to be logged in to update'], status: 422
  #   end
  # end

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
