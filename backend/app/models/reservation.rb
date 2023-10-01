class Reservation < ApplicationRecord

  belongs_to :users
  belongs_to :tables

  validates :user_id, presence: true
  validates :date_time, presence: true
  validates :number_of_people, presence: true
  validates :table_id, presence, true

end
