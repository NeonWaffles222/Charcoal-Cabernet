class OrderItem < ApplicationRecord

  belongs_to :order, optional: true
  belongs_to :dish, optional: true

end
