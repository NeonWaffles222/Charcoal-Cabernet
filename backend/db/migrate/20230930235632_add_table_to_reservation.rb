class AddTableToReservation < ActiveRecord::Migration[7.0]
  def change
    add_reference :reservations, :table, index: true, foreign_key: true
  end
end
