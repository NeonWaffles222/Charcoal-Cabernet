class Table < ApplicationRecord
  
  validates :table_number, presence: true
  validates :capacity, presence: true
  has_many :reservations
  
end
