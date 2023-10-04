class Category < ApplicationRecord

  has_many :dishes

  validates :name, presence: true
  has_many :favorites
  has_many :favorited_by, through: :favorites, source: :user

end
