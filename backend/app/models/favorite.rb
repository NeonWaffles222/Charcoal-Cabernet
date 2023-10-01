class Favorite < ApplicationRecord

  belongs_to :users
  belongs_to :dishes

  validates :user_id, presence: true
  validates :dish_id, presence: true

end
