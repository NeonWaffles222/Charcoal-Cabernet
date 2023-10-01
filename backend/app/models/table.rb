class Table < ApplicationRecord
  
  validates :table_number, presence: true
  validates :capacity, presence: true
  
end
