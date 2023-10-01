# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data ..."

## CATEGORIES

puts "Finding or Creating Categories ..."

cat1 = Category.find_or_create_by! name: 'food'
cat2 = Category.find_or_create_by! name: 'drinks'

puts "Re-creating Dishes ..."

Dish.destroy_all

cat1.dishes.create!({
  name: 'steak',
  description: 'yummy',
  price: 500,
  quantity: 5,
  image_url: 'backend/app/assets/images/1_steakhouse_wings.jpg'
})

puts "Re-creating Users ..."

User.destroy_all

User.create({
  first_name: 'Billy',
  last_name: 'Bob',
  username: 'BBcoolguy',
  email: 'BillyB@gmail.com',
  password: 'password123',
  phone_number: '222-222-2222'
})

puts "DONE!"