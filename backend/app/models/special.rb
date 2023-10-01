class Special < ApplicationRecord

  validates :category_id, presence: true
  validates :name, presence: true
  validates :price, presence: true
  validates :valid_until, presence: true
  
end
