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

  # def login
  #   # binding.pry
  #   @user = User.find_by(params[:username])
  #   if @user.password == params[:password]
  #    render json: @user, status: :ok
  #    else
  #    render status: :not_found
  #   end
  # end


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
    params.require(:user).permit(:username, :email, :password, :image)
  end

end
