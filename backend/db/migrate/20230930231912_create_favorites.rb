class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :user, index: true, foreign_key: true
      t.references :dish, index: true, foreign_key: true

      t.timestamps
    end
  end
end
