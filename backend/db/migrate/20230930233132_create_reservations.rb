class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, index: true, foreign_key: true
      t.datetime :date_time
      t.integer :number_of_people
      t.text :special_request

      t.timestamps
    end
  end
end
