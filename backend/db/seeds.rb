# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data ..."

User.destroy_all

User.create(first_name: "Noah", last_name: "McMillan")
User.create(first_name: "jim", last_name: "jones")
User.create(first_name: "linda", last_name: "book")
User.create(first_name: "joe", last_name: "bean")