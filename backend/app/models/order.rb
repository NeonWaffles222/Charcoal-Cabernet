class Order < ApplicationRecord

  belongs_to :user, optional: true
  has_many :order_items

  accepts_nested_attributes_for :order_items

  validates :user_id, presence: true
  validates :status, presence: true
  validates :total_price, presence: true
  
end
