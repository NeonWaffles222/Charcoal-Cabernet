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

puts "Re-creating Tables ..."

  Table.destroy_all

  Table.create({
    table_number: 1,
    capacity: 2,
    location: 'Front'
  })

  Table.create({
    table_number: 2,
    capacity: 4,
    location: 'Back'
  })

  Table.create({
    table_number: 3,
    capacity: 6,
    location: 'Outside'
  })

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

User.create({
  first_name: 'Jimmy',
  last_name: 'Jom',
  username: 'JJlameguy',
  email: 'JimmyJ@gmail.com',
  password: 'password123',
  phone_number: '333-333-3333'
})

puts "DONE!"