# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_30_000150) do
 # Users table
 create_table "users", force: :cascade do |t|
  t.string "first_name"
  t.string "last_name"
  t.string "username", unique: true
  t.string "email", unique: true
  t.string "password_digest"
  t.string "phone_number", unique: true
end

# Categories table
create_table "categories", force: :cascade do |t|
  t.string "name", unique: true
end

# Dishes table
create_table "dishes", force: :cascade do |t|
  t.references "category", foreign_key: true
  t.string "name"
  t.text "description"
  t.decimal "price"
  t.integer "quantity"
  t.text "ingredients"
  t.text "allergens"
  t.string "image_url"  # Photo of the dish
  t.boolean "isActive", default: true
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

# Favorites table
create_table "favorites", force: :cascade do |t|
  t.references "user", foreign_key: true
  t.references "dish", foreign_key: true
end

# Orders table
create_table "orders", force: :cascade do |t|
  t.references "user", foreign_key: true
  t.string "status"
  t.decimal "total_price"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

# OrderItems table
create_table "order_items", force: :cascade do |t|
  t.references "order", foreign_key: true
  t.references "dish", foreign_key: true
end

# OrderStatus table
create_table "order_status", force: :cascade do |t|
  t.references "order", foreign_key: true
  t.string "status" # e.g. 'In progress', 'Delivered'
  t.datetime "updated_at", null: false
end

# Reservations table
create_table "reservations", force: :cascade do |t|
  t.references "user", foreign_key: true
  t.datetime "date_time"
  t.integer "number_of_people"
  t.integer "table_number"
  t.text "special_request"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

# Specials table
create_table "specials", force: :cascade do |t|
  t.references "category", foreign_key: true
  t.string "name"
  t.text "description"
  t.decimal "price"
  t.date "valid_until"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

# Tables table (for restaurant tables)
create_table "tables", force: :cascade do |t|
  t.integer "table_number", unique: true
  t.integer "capacity"
  t.string "status" # e.g. 'Available', 'Reserved'
end

end