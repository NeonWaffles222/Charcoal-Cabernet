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

Category.destroy_all
categories = ["Appetizers", "Salads", "Soups", "Side dishes", "Sandwiches", "Meats", "Seafood", "Desserts", "Beverages"]
categories.each do |category_name|
  Category.create!(name: category_name)
end

appetizers = Category.create!(name: 'Appetizers')
salads = Category.create!(name: 'Salads')
soups = Category.create!(name: 'Soups')
side_dishes = Category.create!(name: 'Side Dishes')
sandwiches = Category.create!(name: 'Sandwiches')
meats = Category.create!(name: 'Meats')
seafood = Category.create!(name: 'Seafood')
desserts = Category.create!(name: 'Desserts')
beverages = Category.create!(name: 'Beverages')


puts "Seeded #{Category.count} categories!"

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

dishes = [
  {
    category_id: 1
    name: 'Seasoned Steakhouse Wings',
    description: 'Crispy wings seasoned to perfection, served with tangy blue cheese and buffalo sauce.',
    price: 11.29,
    quantity: 100,
    image_url: 'app/assets/images/1_steakhouse_wings.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: 2023-10-01 12:30:45,    
    updated_at: 2023-10-01 12:30:45,
  },
  {
    category_id: 1
    name: 'Wild West Shrimp',
    description: 'Shrimp fried to a golden brown, tossed with spicy cherry peppers and garlic butter, paired with a creamy ranch dip.',
    price: 11.49,
    quantity: 100,
    image_url: 'app/assets/images/2_wild_west_shrimp.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: 2023-10-01 12:30:45,    
    updated_at: 2023-10-01 12:30:45,
  },
  {
    category_id: 1,
    name: 'Spicy Chicken Bites',
    description: 'Bite-sized chicken pieces infused with a sweet and spicy chili-ginger sauce.',
    price: 5.99,
    quantity: 100,
    image_url: 'app/assets/images/3_chicken_bites.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 12:30:45',
    updated_at: '2023-10-01 12:30:45',
},
{
    category_id: 1,
    name: 'Texas Tonion',
    description: 'Delicately battered onion petals fried until golden and crispy, complemented with a zesty dip.',
    price: 8.99,
    quantity: 100,
    image_url: 'app/assets/images/4_texas_tonions.jpg',
    isActive: true,
    dairy_allergen: true,   
    nuts_allergen: false,
    gluten_allergen: true, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 12:30:45',
    updated_at: '2023-10-01 12:30:45',
},
{
    category_id: 1,
    name: 'White Cheddar Stuffed Mushrooms',
    description: 'Juicy mushrooms filled with creamy garlic herb cheese and crowned with a golden Parmesan crust.',
    price: 9.99,
    quantity: 100,
    image_url: 'app/assets/images/5_cheddar-stuufed-Mushromoms.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 12:45:30',
    updated_at: '2023-10-01 12:45:30',
},
{
    category_id: 1, 
    name: 'Firecracker Chicken Wraps',
    description: 'Spicy chicken and cheese enveloped in a soft tortilla, accompanied by an avocado-lime dip.',
    price: 10.49,
    quantity: 100,
    image_url: 'app/assets/images/6_chicken_wrap.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 13:00:00',
    updated_at: '2023-10-01 13:00:00',
},
# For 6 Tenders
{
    category_id: 1, 
    name: 'Hand-Breaded Chicken Tenders - 6 Tenders',
    description: 'Fresh, juicy, and hand-breaded to order with housemade honey mustard.',
    price: 13.79,
    quantity: 100,
    image_url: 'app/assets/images/21_chicken_tenders.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: true,
    created_at: '2023-10-01 13:15:00',
    updated_at: '2023-10-01 13:15:00',
},

# For 9 Tenders
{
    category_id: 1, 
    name: 'Hand-Breaded Chicken Tenders - 9 Tenders',
    description: 'Fresh, juicy, and hand-breaded to order with housemade honey mustard.',
    price: 15.79,
    quantity: 100,
    image_url: 'app/assets/images/21_chicken_tenders.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: true,
    created_at: '2023-10-01 13:20:00',
    updated_at: '2023-10-01 13:20:00',
},
# For 9oz Parmesan Crusted Chicken
{
    category_id: 1,  
    name: 'Parmesan Crusted Chicken - 9oz',
    description: 'Topped with our creamy Parmesan and garlic cheese crust.',
    price: 15.49,
    quantity: 100,
    image_url: 'app/assets/images/22_parm_crusted_chicken.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 13:30:00',
    updated_at: '2023-10-01 13:30:00',
},

# For 12oz Parmesan Crusted Chicken
{
    category_id: 1,  
    name: 'Parmesan Crusted Chicken - 12oz',
    description: 'Topped with our creamy Parmesan and garlic cheese crust.',
    price: 17.49,
    quantity: 100,
    image_url: 'app/assets/images/22_parm_crusted_chicken.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 13:35:00',
    updated_at: '2023-10-01 13:35:00',
},
# For 7oz LongHorn Salmon
{
    category_id: 1,  
    name: 'LongHorn Salmon - 7oz',
    description: 'Hand-cut, fresh Atlantic salmon marinated in our signature bourbon marinade.',
    price: 19.79,
    quantity: 100,
    image_url: 'app/assets/images/23_long_salmon.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 14:10:00',
    updated_at: '2023-10-01 14:10:00',
},

# For 10oz LongHorn Salmon
{
    category_id: 1,  
    name: 'LongHorn Salmon - 10oz',
    description: 'Hand-cut, fresh Atlantic salmon marinated in our signature bourbon marinade.',
    price: 22.29,
    quantity: 100,
    image_url: 'app/assets/images/23_long_salmon.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 14:15:00',
    updated_at: '2023-10-01 14:15:00',
},

# For 8ct Redrock Grilled Shrimp
{
    category_id: 1,  
    name: 'Redrock Grilled Shrimp - 8ct',
    description: 'Glazed with smoky tomato butter, served over rice with a side of garlic butter.',
    price: 15.99,
    quantity: 100,
    image_url: 'app/assets/images/24_red_grilled_shrimp copy.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 13:40:00',
    updated_at: '2023-10-01 13:40:00',
},

# For 12ct Redrock Grilled Shrimp
{
    category_id: 1, 
    name: 'Redrock Grilled Shrimp - 12ct',
    description: 'Glazed with smoky tomato butter, served over rice with a side of garlic butter.',
    price: 18.99,
    quantity: 100,
    image_url: 'app/assets/images/24_red_grilled_shrimp copy.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 13:45:00',
    updated_at: '2023-10-01 13:45:00',
}, 
# For Half-Rack Baby Back Ribs
{
    category_id: 1, 
    name: 'Baby Back Ribs - Half-Rack',
    description: 'Slow-cooked, tender ribs seasoned with a signature spice blend.',
    price: 16.79,
    quantity: 100,
    image_url: 'app/assets/images/25_baby_back_ribs.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 14:00:00',
    updated_at: '2023-10-01 14:00:00',
},

# For Full-Rack Baby Back Ribs
{
    category_id: 1,  
    name: 'Baby Back Ribs - Full-Rack',
    description: 'Slow-cooked, tender ribs seasoned with a signature spice blend.',
    price: 21.79,
    quantity: 100,
    image_url: 'app/assets/images/25_baby_back_ribs.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 14:05:00',
    updated_at: '2023-10-01 14:05:00',
},
{
    category_id: 1,  
    name: 'Cowboy Pork Chops (2 Chops)',
    description: 'Thick cut, bone-in chops, marinated for tenderness and flavor.',
    price: 19.49,
    quantity: 100,
    image_url: 'app/assets/images/26_pork_cowboy.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false, 
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 14:20:00',
    updated_at: '2023-10-01 14:20:00',
},
{
    category_id: 2, 
    name: 'Farm Fresh Field Greens with Crispy Chicken Tenders',
    description: 'Diced tomatoes, cucumbers, croutons, and cheddar on fresh field greens.',
    price: 13.99,
    quantity: 100,
    image_url: 'app/assets/images/29_salad_chicken_tenders.jpg',
    isActive: true,
    dairy_allergen: true,  
    nuts_allergen: false,
    gluten_allergen: true,  
    shellfish_allergen: false,
    eggs_allergen: false,  
    created_at: '2023-10-01 15:00:00',
    updated_at: '2023-10-01 15:00:00',
},
{
    category_id: 2,  
    name: 'Farm Fresh Field Greens with Salmon',
    description: 'Diced tomatoes, cucumbers, croutons, and cheddar on fresh field greens.',
    price: 16.49,
    quantity: 100,
    image_url: 'app/assets/images/29_salad_chicken_tenders.jpg',
    isActive: true,
    dairy_allergen: true, 
    nuts_allergen: false,
    gluten_allergen: true,  
    shellfish_allergen: false,
    eggs_allergen: false,  
    created_at: '2023-10-01 15:05:00',
    updated_at: '2023-10-01 15:05:00',
},
{
    category_id: 2,  
    name: 'Grilled Chicken & Strawberry Salad',
    description: 'With strawberries, grapes, mandarin oranges, candied pecans, red onion, feta cheese, and raspberry vinaigrette.',
    price: 13.99,
    quantity: 100,
    image_url: 'app/assets/images/30_chicheck_strawberry_salad.jpg',
    isActive: true,
    dairy_allergen: true,  
    nuts_allergen: true,  
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,  
    created_at: '2023-10-01 15:10:00',
    updated_at: '2023-10-01 15:10:00',
},
{
    category_id: 2, 
    name: 'Strawberry & Pecan Salad',
    description: 'A delightful salad featuring fresh field greens, sweet strawberries, candied pecans, and creamy feta cheese, served with your choice of dressing.',
    price: 5.29,
    quantity: 100,
    image_url: 'app/assets/images/39_stawberry_pecan_salad.jpg',
    isActive: true,
    dairy_allergen: true, 
    nuts_allergen: true,  
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false, 
    created_at: '2023-10-01 15:30:00',
    updated_at: '2023-10-01 15:30:00',
},
{
    category_id: 2, 
    name: 'Mixed Greens Salad',
    description: 'A light and crisp salad consisting of mixed greens, fresh vegetables, and croutons, served with your preferred salad dressing.',
    price: 4.49,
    quantity: 100,
    image_url: 'app/assets/images/40_mixed_greeen_salad.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: true,  
    shellfish_allergen: false,
    eggs_allergen: false,  
    created_at: '2023-10-01 15:45:00',
    updated_at: '2023-10-01 15:45:00',
},
{
    category_id: 2,  
    name: 'Caesar Salad',
    description: 'A classic Caesar salad with crisp romaine lettuce, croutons, and grated Parmesan cheese, tossed in a rich Caesar dressing.',
    price: 4.49,
    quantity: 100,
    image_url: 'app/assets/images/41_ceasar_salad.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,  
    shellfish_allergen: false,
    eggs_allergen: true,
    created_at: '2023-10-01 16:00:00',
    updated_at: '2023-10-01 16:00:00',
}















]

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