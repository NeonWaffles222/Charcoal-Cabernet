class User < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username, unique: true
      t.string :email, unique: true
      t.string :password_digest
      t.string :phone_number, unique: true
      t.string :address

      t.timestamps
    end
  end
end
