class Favorite < ApplicationRecord

  validates :user_id, presence: true
  validates :dish_id, presence: true
  
end
