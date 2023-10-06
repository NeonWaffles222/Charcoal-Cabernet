
class OrderItemsController < ApplicationController
  def index
    order_items = OrderItem.all # Assuming you have an OrderItem model
    render json: order_items
  end

  def show
  end

end