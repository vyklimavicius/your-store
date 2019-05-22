class CartsController < ApplicationController

  def index
    @carts = Cart.all

    # status 200
    render json: @carts, status: :ok
  end

  def create
    @cart = Cart.create(cart_params)

    # status 201
    render json: @cart, status: :created
  end

  def destroy

    @cart = Cart.find(params[:id])
    if @cart.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end

  end

  private

  def cart_params
    params.require(:cart).permit(:user_id, :item_id)
  end

end
