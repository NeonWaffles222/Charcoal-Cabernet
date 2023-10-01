class OrderItem < ApplicationRecord

  belongs_to :orders
  belongs_to :dishes

  validates :order_id, presence: true
  validates :dish_id, presence: true

end
