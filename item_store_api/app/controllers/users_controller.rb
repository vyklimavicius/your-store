class UsersController < ApplicationController

  def index
    @users = User.all

    # status 200
    render json: @users, status: :ok
  end

  def create
    @user = User.create(user_params)

    # status 201
    render json: @user, status: :created
  end

  def destroy

    @user = User.find(params[:id])
    if @user.destroy
      head(:ok)
      # status 422
    else
      head(:unprocessable_entity)
    end

  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

end
