class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @orders = Order.all
    render json: @orders
  end
  
  def show
  end

  def create
    @order = Order.new(order_params)
  
    if @order.save!
      render json: @order, status: :created
    else
      render json: { errors: @order.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update_status
    order = Order.find(params[:id])
    order.update(status: params[:status])
    render json: { message: 'Order status updated successfully' }
  end
  
  private

  def order_params
    params.require(:order).permit(:user_id, :status, :total_price, order_items_attributes: [:id, :dish_id, :order_id])
  end
end