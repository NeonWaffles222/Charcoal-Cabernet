class Order < ApplicationRecord

  validates :user_id, presence: true
  validates :status, presence: true
  validates :total_price, presence: true
  
end
