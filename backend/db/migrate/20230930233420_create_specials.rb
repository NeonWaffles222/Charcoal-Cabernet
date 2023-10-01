class CreateSpecials < ActiveRecord::Migration[7.0]
  def change
    create_table :specials do |t|
      t.references :category, index: true, foreign_key: true
      t.string :name
      t.text :description
      t.decimal :price
      t.date :valid_until

      t.timestamps
    end
  end
end
