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
},
# For Cup size
{
    category_id: 3, 
    name: 'French Onion Soup (Cup)',
    description: 'A savory onion soup topped with melted Swiss, Provolone, and toasted Parmesan cheese, served piping hot.',
    price: 6.49,
    quantity: 100,
    image_url: 'app/assets/images/42_french_onion_soup.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,  
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 16:10:00',
    updated_at: '2023-10-01 16:10:00',
},
# For Bowl size
{
    category_id: 3,  
    name: 'French Onion Soup (Bowl)',
    description: 'A savory onion soup topped with melted Swiss, Provolone, and toasted Parmesan cheese, served piping hot.',
    price: 7.49,
    quantity: 100,
    image_url: 'app/assets/images/42_french_onion_soup.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,  
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 16:15:00',
    updated_at: '2023-10-01 16:15:00',
},
# For Cup size
{
    category_id: 3,  
    name: 'Loaded Potato Soup (Cup)',
    description: 'A comforting potato soup, generously loaded with bacon, cheddar cheese, and fresh green onions, creating a hearty and flavorful choice.',
    price: 5.79,
    quantity: 100,
    image_url: 'app/assets/images/43_loaded_potato_soup.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,  
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 16:20:00',
    updated_at: '2023-10-01 16:20:00',
},
# For Bowl size
{
    category_id: 3,  
    name: 'Loaded Potato Soup (Bowl)',
    description: 'A comforting potato soup, generously loaded with bacon, cheddar cheese, and fresh green onions, creating a hearty and flavorful choice.',
    price: 7.79,
    quantity: 100,
    image_url: 'app/assets/images/43_loaded_potato_soup.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,  
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 16:25:00',
    updated_at: '2023-10-01 16:25:00',
},
# For Cup size
{
    category_id: 3,  
    name: 'Shrimp & Lobster Chowder (Cup)',
    description: 'A creamy chowder featuring shrimp and lobster, accented with corn, red bell peppers, and potatoes, garnished with fresh green onions.',
    price: 6.49,
    quantity: 100,
    image_url: 'app/assets/images/44_shrim_lobster_soup.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,  
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 16:30:00',
    updated_at: '2023-10-01 16:30:00',
},
# For Bowl size
{
    category_id: 3, 
    name: 'Shrimp & Lobster Chowder (Bowl)',
    description: 'A creamy chowder featuring shrimp and lobster, accented with corn, red bell peppers, and potatoes, garnished with fresh green onions.',
    price: 7.49,
    quantity: 100,
    image_url: 'app/assets/images/44_shrim_lobster_soup.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,  
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 16:35:00',
    updated_at: '2023-10-01 16:35:00',
},
{
    category_id: 4, 
    name: 'Parmesan Cheese Crust',
    description: 'A golden crust of Parmesan cheese that adds an extra layer of flavor and crunch to your steak.',
    price: 1.99,
    quantity: 100,
    image_url: 'app/assets/images/17_parm_cheese_crust.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,  
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:05:00',
    updated_at: '2023-10-01 17:05:00',
},
{
    category_id: 4, 
    name: 'Grilled Mushrooms',
    description: 'Mushrooms grilled to perfection, enhancing their earthy flavors.',
    price: 3.49,
    quantity: 100,
    image_url: 'app/assets/images/18_grilled_musrooms.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:15:00',
    updated_at: '2023-10-01 17:15:00',
},
# For the Cup size
{
    category_id: 4, 
    name: 'LongHorn Chili (Cup)',
    description: 'Rich, hearty, and full of flavor.',
    price: 5.79,
    quantity: 100,
    image_url: 'app/assets/images/31_chili_cup.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:30:00',
    updated_at: '2023-10-01 17:30:00',
},

# For the Bowl size
{
    category_id: 4, 
    name: 'LongHorn Chili (Bowl)',
    description: 'Rich, hearty, and full of flavor.',
    price: 7.79,
    quantity: 100,
    image_url: 'app/assets/images/31_chili_cup.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:32:00',
    updated_at: '2023-10-01 17:32:00',
},
{
    category_id: 4, 
    name: 'Steakhouse Mac & Cheese',
    description: 'Creamy macaroni and cheese infused with smoky bacon and a blend of four creamy cheeses, baked to perfection.',
    price: 4.99,
    quantity: 100,
    image_url: 'app/assets/images/32_mac_a_cheese.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:40:00',
    updated_at: '2023-10-01 17:40:00',
},
{
    category_id: 4,  
    name: 'Crispy Brussels Sprouts',
    description: 'Brussels sprouts flash-fried to a crispy texture and tossed in a smoky honey butter sauce for a sweet and savory flavor.',
    price: 3.49,
    quantity: 100,
    image_url: 'app/assets/images/33_brussel_sprout.jpg',
    isActive: true,
    dairy_allergen: true, 
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:45:00',
    updated_at: '2023-10-01 17:45:00',
},
{
    category_id: 4,  
    name: 'Fresh Steamed Asparagus',
    description: 'Tender asparagus spears, lightly steamed to preserve their natural freshness, and drizzled with a delicate lemon sauce.',
    price: 3.49,
    quantity: 100,
    image_url: 'app/assets/images/34_asparagus.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 17:55:00',
    updated_at: '2023-10-01 17:55:00',
},
{
    category_id: 4, 
    name: 'Idaho Baked Potato',
    description: 'A fluffy baked potato served hot, loaded with crispy bacon, cheddar cheese, sour cream, butter, and fresh green onions.',
    price: 2.99,
    quantity: 100,
    image_url: 'app/assets/images/35_baked_potato.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:05:00',
    updated_at: '2023-10-01 18:05:00',
},
{
    category_id: 4, 
    name: 'Sweet Potato',
    description: 'A sweet and buttery roasted sweet potato, dusted with cinnamon sugar for a delightful contrast of flavors.',
    price: 2.99,
    quantity: 100,
    image_url: 'app/assets/images/36_sweet_potato.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:10:00',
    updated_at: '2023-10-01 18:10:00',
},
{
    category_id: 4, 
    name: 'Mashed Potatoes',
    description: 'Creamy mashed potatoes made with butter and seasoning, providing a comforting and classic side dish.',
    price: 2.99,
    quantity: 100,
    image_url: 'app/assets/images/37_mashed_potato.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:15:00',
    updated_at: '2023-10-01 18:15:00',
},
{
    category_id: 4, 
    name: 'Seasoned French Fries',
    description: 'Crispy golden fries seasoned with a special blend of herbs and spices, making them a savory and satisfying accompaniment.',
    price: 2.99,
    quantity: 100,
    image_url: 'app/assets/images/38_fries.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:20:00',
    updated_at: '2023-10-01 18:20:00',
},
{
    category_id: 5,  
    name: 'The LH Burger',
    description: 'Shaved prime rib, Swiss cheese, crispy onion straws, arugula, and steakhouse mayo on a toasted potato bun.',
    price: 13.99,
    quantity: 100,
    image_url: 'app/assets/images/27_LH_burger.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:30:00',
    updated_at: '2023-10-01 18:30:00',
},
{
    category_id: 5, 
    name: 'Maverick Ribeye Sandwich',
    description: 'Shaved prime rib topped with onions, mushrooms, and Swiss cheese on French bread.',
    price: 14.49,
    quantity: 100,
    image_url: 'app/assets/images/28_Ribeye_steak_sandwich.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:35:00',
    updated_at: '2023-10-01 18:35:00',
},
{
    category_id: 6,  
    name: 'Flo\'s Filet (6oz)',
    description: 'A center-cut filet known for its exceptional tenderness, seasoned to perfection.',
    price: 21.99,
    quantity: 100,
    image_url: 'app/assets/images/7_flo_filet.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:40:00',
    updated_at: '2023-10-01 18:40:00',
},
{
    category_id: 6, 
    name: 'Flo\'s Filet (9oz)',
    description: 'A center-cut filet known for its exceptional tenderness, seasoned to perfection.',
    price: 27.49,
    quantity: 100,
    image_url: 'app/assets/images/7_flo_filet.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:41:00',
    updated_at: '2023-10-01 18:41:00',
},
{
    category_id: 6, 
    name: 'Outlaw Ribeye (20oz)',
    description: 'A bone-in cut, known for its marbling, grilled to enhance its robust flavors.',
    price: 27.49,
    quantity: 100,
    image_url: 'app/assets/images/8_outlaw_ribeye.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 18:45:00',
    updated_at: '2023-10-01 18:45:00',
},
{
    category_id: 6, 
    name: 'The LongHorn (22oz)',
    description: 'A porterhouse that boasts the flavors of a bone-in strip and the tenderness of a filet.',
    price: 29.99,
    quantity: 100,
    image_url: 'app/assets/images/9_longhorn.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 19:15:00',
    updated_at: '2023-10-01 19:15:00',
},
{
    category_id: 6,  
    name: 'Chop Steak (10oz)',
    description: 'Freshly ground steak draped with grilled mushrooms, sautéed onions, and a rich garlic herb sauce.',
    price: 11.99,
    quantity: 100,
    image_url: 'app/assets/images/10_chop_steak.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 19:25:00',
    updated_at: '2023-10-01 19:25:00',
},
{
    category_id: 6, 
    name: 'Renegade Sirloin (6oz)',
    description: 'A lean USDA Choice center-cut top sirloin that promises a hearty steak experience.',
    price: 13.49,
    quantity: 100,
    image_url: 'app/assets/images/11_renegade_sirloin.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 19:30:00',
    updated_at: '2023-10-01 19:30:00',
},
{
    category_id: 6,  
    name: 'Renegade Sirloin (8oz)',
    description: 'A lean USDA Choice center-cut top sirloin that promises a hearty steak experience.',
    price: 16.49,
    quantity: 100,
    image_url: 'app/assets/images/11_renegade_sirloin.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 19:33:00',
    updated_at: '2023-10-01 19:33:00',
},
{
    category_id: 6, 
    name: 'Ribeye (12oz)',
    description: 'Known for its juiciness and flavorful marbling, this steak is a carnivore\'s delight.',
    price: 22.29,
    quantity: 100,
    image_url: 'app/assets/images/12_ribeye.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 19:45:00',
    updated_at: '2023-10-01 19:45:00',
},
{
    category_id: 6,  
    name: 'New York Strip (12oz)',
    description: 'A thick cut that\'s fire-grilled, amplifying its distinctive taste, making it a steakhouse favorite.',
    price: 22.29,
    quantity: 100,
    image_url: 'app/assets/images/13_NY-steak.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 19:50:00',
    updated_at: '2023-10-01 19:50:00',
},
{
    category_id: 6,  
    name: 'Fire-Grilled T-Bone (18oz)',
    description: 'A dual-experience steak offering the marbled flavor of a strip and the softness of a filet.',
    price: 26.49,
    quantity: 100,
    image_url: 'app/assets/images/14_t-bone-steak.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 20:00:00',
    updated_at: '2023-10-01 20:00:00',
},
{
    category_id: 6, 
    name: '6oz. Renegade Sirloin with 8ct. Redrock Grilled Shrimp',
    description: 'A perfect combo of a juicy sirloin paired with grilled shrimp, served over rice with rich garlic butter.',
    price: 19.49,
    quantity: 100,
    image_url: 'app/assets/images/15_sirloin_shrimp.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 20:15:00',
    updated_at: '2023-10-01 20:15:00',
},
{
    category_id: 6,  
    name: '6oz. Flo\'s Filet with 4oz. Lobster Tail',
    description: 'A tender Flo\'s Filet combined with a buttery lobster tail for an elevated dining experience.',
    price: 30.29,
    quantity: 100,
    image_url: 'app/assets/images/16_filet_lobster.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 20:15:00',
    updated_at: '2023-10-01 20:15:00',
},
{
    category_id: 7, 
    name: '4ct. Redrock Grilled Shrimp',
    description: 'Succulent shrimp grilled to perfection, served on a bed of rice with luscious garlic butter.',
    price: 6.49,
    quantity: 100,
    image_url: 'app/assets/images/19_grilled_shrimp.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 20:20:00',
    updated_at: '2023-10-01 20:20:00',
},
{
    category_id: 7, 
    name: '4oz. Lobster Tail',
    description: 'A tender lobster tail, steamed to perfection and served with melted butter for dipping.',
    price: 10.79,
    quantity: 100,
    image_url: 'app/assets/images/20_lobster_tail.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: true,
    eggs_allergen: false,
    created_at: '2023-10-01 20:25:00',
    updated_at: '2023-10-01 20:25:00',
},
{
    category_id: 8,  
    name: 'Chocolate Lava Cake',
    description: 'A warm, rich chocolate cake filled with molten chocolate and topped with vanilla ice cream.',
    price: 7.49,
    quantity: 100,
    image_url: 'app/assets/images/45_chocolate_lava.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: true,
    created_at: '2023-10-01 20:50:00',
    updated_at: '2023-10-01 20:50:00',
},
{
    category_id: 8, 
    name: 'New York Cheesecake',
    description: 'Creamy and rich classic cheesecake topped with a sweet strawberry sauce.',
    price: 7.29,
    quantity: 100,
    image_url: 'app/assets/images/46_new-york_cheesecake.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 21:00:00',
    updated_at: '2023-10-01 21:00:00',
},
{
    category_id: 8,  
    name: 'Key Lime Pie',
    description: 'A tangy and sweet dessert with a crumbly crust, topped with whipped cream.',
    price: 7.29,
    quantity: 100,
    image_url: 'app/assets/images/47_key_lime_pie.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 21:05:00',
    updated_at: '2023-10-01 21:05:00',
},
{
    category_id: 8,  
    name: 'Molten Chocolate Chip Cookie Sundae',
    description: 'A warm chocolate chip cookie, baked in a skillet, topped with vanilla ice cream and drizzled with chocolate sauce.',
    price: 7.49,
    quantity: 100,
    image_url: 'app/assets/images/48_molten_choco_chip_sunday_cookie.jpg',
    isActive: true,
    dairy_allergen: true,
    nuts_allergen: false,
    gluten_allergen: true,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 21:10:00',
    updated_at: '2023-10-01 21:10:00',
},
{
    category_id: 9,  
    name: 'Raspberry Lemonade',
    description: 'A refreshing blend of sweet raspberries and tart lemonade, perfect for quenching your thirst.',
    price: 3.29,
    quantity: 200,  
    image_url: 'app/assets/images/49_Raspberry-Lemonade.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 22:00:00',
    updated_at: '2023-10-01 22:00:00',
},
{
    category_id: 9, 
    name: 'Freshly Brewed Iced Tea',
    description: 'Classic iced tea, brewed fresh and served cold with a slice of lemon.',
    price: 2.99,
    image_url: 'app/assets/images/50_ice_tea.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 23:00:00',
    updated_at: '2023-10-01 23:00:00',
},
{
    category_id: 9,  
    name: 'Mango Lemonade',
    description: 'A tropical twist on traditional lemonade with the sweet flavor of ripe mangoes.',
    price: 3.29,
    quantity: 250, 
    image_url: 'app/assets/images/51_mango-lemonade.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 23:05:00',
    updated_at: '2023-10-01 23:05:00',
},
{
    category_id: 9, 
    name: 'LongHorn Chili Lime Ginger Ale',
    description: 'A zesty and spicy drink with a hint of lime and ginger, providing a unique refreshing experience.',
    price: 3.29,
    quantity: 250,  
    image_url: 'app/assets/images/52_chili_lima_ginger_ale.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 23:10:00',
    updated_at: '2023-10-01 23:10:00',
},
{
    category_id: 9, 
    name: 'Fountain Drinks',
    description: 'A selection of popular sodas, served cold with ice.',
    price: 2.99,
    quantity: 300, 
    image_url: 'app/assets/images/53_fountain_drinks.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 23:12:00',
    updated_at: '2023-10-01 23:12:00',
},
{
    category_id: 9,  
    description: 'Crisp and clean bottled water to hydrate and refresh.',
    price: 2.99,
    quantity: 500,  
    image_url: 'app/assets/images/54_bottled_water.jpg',
    isActive: true,
    dairy_allergen: false,
    nuts_allergen: false,
    gluten_allergen: false,
    shellfish_allergen: false,
    eggs_allergen: false,
    created_at: '2023-10-01 23:15:00',
    updated_at: '2023-10-01 23:15:00',
}
]

dishes.each do |dish|
  category.dishes.create!(dish)
end


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