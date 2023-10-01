class OrderItem < ApplicationRecord

  validates :order_id, presence: true
  validates :dish_id, presence: true
  
end
