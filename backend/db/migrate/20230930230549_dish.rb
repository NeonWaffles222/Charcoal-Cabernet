class Dish < ActiveRecord::Migration[7.0]
  create_table :dishes do |t|
    t.references :category, index: true, foreign_key: true
    t.string :name
    t.text :description
    t.decimal :price
    t.integer :quantity
    t.string :image_url
    t.boolean :isActive, default: true
    t.boolean :dairy_allergen, default: false
    t.boolean :nuts_allergen, default: false
    t.boolean :gluten_allergen, default: false
    t.boolean :shellfish_allergen, default: false
    t.boolean :eggs_allergen, default: false

    t.timestamps
  end
end
