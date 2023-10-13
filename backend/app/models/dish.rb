class Dish < ApplicationRecord

  belongs_to :category

  validates :name, presence: true
  validates :price, presence: true
  validates :category, presence: true
 
  has_many :favorites, dependent: :destroy
  
end
