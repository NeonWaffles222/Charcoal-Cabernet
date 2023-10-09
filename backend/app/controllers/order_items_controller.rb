
class OrderItemsController < ApplicationController
  def index
    order_items = OrderItem.all
    render json: order_items
  end

  def show
  end

end