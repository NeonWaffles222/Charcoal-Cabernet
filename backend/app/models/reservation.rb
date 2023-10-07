class Reservation < ApplicationRecord

  belongs_to :user
  belongs_to :table

  validates :user_id, presence: true
  validates :date_time, presence: true
  validates :number_of_people, presence: true
  validates :table_id, presence: true

end
