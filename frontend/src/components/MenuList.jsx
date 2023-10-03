import { useState } from "react";
import React from 'react';
import "../styles/styles.css";
import Modal from './MenuModal';


function MenuList() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="menu">
      <h2 className
        ="menu-title">Menu</h2>

      <div className='menu-items'>
        <h3 className
          ="menu-category">Appetizers</h3>
        <hr />
        <div className='menu-1'>
          <div className='col-1'>
            <div>
              <Modal
                isOpen={modalOpen}
                imageUrl={"images/6_chicken_wrap.jpg"}
                title={"Seasoned Steakhouse Wings"}
                description={"Crispy wings seasoned to perfection, served with tangy blue cheese and buffalo sauce."}
                price={"$11.29"}
                onClose={() => setModalOpen(false)}
              />

              <a href="#" onClick={() => setModalOpen(true)}>Seasoned Steakhouse Wings</a> <strong>- $11.29  </strong>

              <p>Description: Crispy wings seasoned to perfection, served with tangy blue cheese and buffalo sauce.</p>
            </div>
            <div>
              <a href="#">Wild West Shrimp</a> - $11.49
              <p>Description: Shrimp fried to a golden brown, tossed with spicy cherry peppers and garlic butter, paired with a creamy ranch dip.</p>
            </div>
            <div>
              <a href="#">Spicy Chicken Bites</a> - $5.99
              <p>Description: Bite-sized chicken pieces infused with a sweet and spicy chili-ginger sauce.</p>
            </div>
            <div>
              <a href="#">Texas Tonion</a> - $8.99
              <p>Description: Delicately battered onion petals fried until golden and crispy, complemented with a zesty dip.</p>
            </div>
            <div>
              <a href="#">White Cheddar Stuffed Mushrooms</a> - $9.99
              <p>Description: Juicy mushrooms filled with creamy garlic herb cheese and crowned with a golden Parmesan crust.</p>
            </div>
            <div>
              <a href="#">Firecracker Chicken Wraps</a> - $10.49
              <p>Description: Spicy chicken and cheese enveloped in a soft tortilla, accompanied by an avocado-lime dip.</p>
            </div>
            <div>
              <a href="#">Hand-Breaded Chicken Tenders</a>
              <p>6 Tenders - $13.79 | 9 Tenders - $15.79</p>
              <p>Description: Fresh, juicy, and hand-breaded to order with housemade honey mustard.</p>
            </div>
          </div>
          <div className='col-2'>
            <div>
              <a href="#">Parmesan Crusted Chicken</a>
              <p>9oz - $15.49 | 12oz - $17.49</p>
              <p>Description: Topped with our creamy Parmesan and garlic cheese crust.</p>
            </div>
            <div>
              <a href="#">LongHorn Salmon</a>
              <p>7oz - $19.79 | 10oz - $22.29</p>
              <p>Description: Hand-cut, fresh Atlantic salmon marinated in our signature bourbon marinade.</p>
            </div>
            <div>
              <a href="#">Redrock Grilled Shrimp</a>
              <p>8ct - $15.99 | 12ct - $18.99</p>
              <p>Description: Glazed with smoky tomato butter, served over rice with a side of garlic butter.</p>
            </div>
            <div>
              <a href="#">Baby Back Ribs</a>
              <p>Half-Rack - $16.79 | Full-Rack - $21.79</p>
              <p>Description: Slow-cooked, tender ribs seasoned with a signature spice blend.</p>
            </div>
            <div>
              <a href="#">Cowboy Pork Chops (2 Chops)</a> - $19.49
              <p>Description: Thick cut, bone-in chops, marinated for tenderness and flavor.</p>
            </div>

          </div>


        </div>
        <h3 className
          ="menu-category">Salads</h3>
        <div className='menu-2'>

          <ul className='salads'>
            <li>
              <a href="#">Farm Fresh Field Greens with Crispy Chicken Tenders</a>
              <p>$13.99 | Salmon - $16.49</p>
              <p>Description: Diced tomatoes, cucumbers, croutons, and cheddar on fresh field greens.</p>
            </li>
            <li>
              <a href="#">Grilled Chicken & Strawberry Salad</a> - $13.99
              <p>Description: With strawberries, grapes, mandarin oranges, candied pecans, red onion, feta cheese, and raspberry vinaigrette.</p>
            </li>
            <li>
              <a href="#">Strawberry & Pecan Salad</a> - $5.29
              <p>Description: A delightful salad featuring fresh field greens, sweet strawberries, candied pecans, and creamy feta cheese, served with your choice of dressing.</p>
            </li>
            <li>
              <a href="#">Mixed Greens Salad</a> - $4.49
              <p>Description: A light and crisp salad consisting of mixed greens, fresh vegetables, and croutons, served with your preferred salad dressing.</p>
            </li>
            <li>
              <a href="#">Caesar Salad</a> - $4.49
              <p>Description: A className
                ic Caesar salad with crisp romaine lettuce, croutons, and grated Parmesan cheese, tossed in a rich Caesar dressing.</p>
            </li>
          </ul>


        </div>
        <h3 className
          ="menu-category">Soups</h3>
        <div className='menu-3'>

          <ul className='soups'>
            <li>
              <a href="#">French Onion Soup</a>
              <p>$6.49 (Cup) | $7.49 (Bowl)</p>
              <p>Description: A savory onion soup topped with melted Swiss, Provolone, and toasted Parmesan cheese, served piping hot.</p>
            </li>
            <li>
              <a href="#">Loaded Potato Soup</a>
              <p>$5.79 (Cup) | $7.79 (Bowl)</p>
              <p>Description: A comforting potato soup, generously loaded with bacon, cheddar cheese, and fresh green onions, creating a hearty and flavorful choice.</p>
            </li>
            <li>
              <a href="#">Shrimp & Lobster Chowder</a>
              <p>$6.49 (Cup) | $7.49 (Bowl)</p>
              <p>Description: A creamy chowder featuring shrimp and lobster, accented with corn, red bell peppers, and potatoes, garnished with fresh green onions.</p>
            </li>
          </ul>


        </div>
        <h3 className
          ="menu-category">Side Dishes</h3>
        <div className='menu-4'>

          <ul className='side_dishes'>
            <li>
              <a href="#">Parmesan Cheese Crust</a> - $1.99
              <p>Description: A golden crust of Parmesan cheese that adds an extra layer of flavor and crunch to your steak.</p>
            </li>
            <li>
              <a href="#">Grilled Mushrooms</a> - $3.49
              <p>Description: Mushrooms grilled to perfection, enhancing their earthy flavors.</p>
            </li>
            <li>
              <a href="#">LongHorn Chili</a> - $5.79 (Cup) | $7.79 (Bowl)
              <p>Description: Rich, hearty, and full of flavor.</p>
            </li>
            <li>
              <a href="#">Steakhouse Mac & Cheese</a> - $4.99
              <p>Description: Creamy macaroni and cheese infused with smoky bacon and a blend of four creamy cheeses, baked to perfection.</p>
            </li>
            <li>
              <a href="#">Crispy Brussels Sprouts</a> - $3.49
              <p>Description: Brussels sprouts flash-fried to a crispy texture and tossed in a smoky honey butter sauce for a sweet and savory flavor.</p>
            </li>
            <li>
              <a href="#">Fresh Steamed Asparagus</a> - $3.49
              <p>Description: Tender asparagus spears, lightly steamed to preserve their natural freshness, and drizzled with a delicate lemon sauce.</p>
            </li>
            <li>
              <a href="#">Idaho Baked Potato</a> - $2.99
              <p>Description: A fluffy baked potato served hot, loaded with crispy bacon, cheddar cheese, sour cream, butter, and fresh green onions.</p>
            </li>
            <li>
              <a href="#">Sweet Potato</a> - $2.99
              <p>Description: A sweet and buttery roasted sweet potato, dusted with cinnamon sugar for a delightful contrast of flavors.</p>
            </li>
            <li>
              <a href="#">Mashed Potatoes</a> - $2.99
              <p>Description: Creamy mashed potatoes made with butter and seasoning, providing a comforting and className
                ic side dish.</p>
            </li>
            <li>
              <a href="#">Seasoned French Fries</a> - $2.99
              <p>Description: Crispy golden fries seasoned with a special blend of herbs and spices, making them a savory and satisfying accompaniment.</p>
            </li>
          </ul>


        </div>
        <h3 className
          ="menu-category">Sandwich</h3>
        <div className='menu-5'>

          <ul className='sandwich'>
            <li>
              <a href="#">The LH Burger</a> - $13.99
              <p>Description: Shaved prime rib, Swiss cheese, crispy onion straws, arugula, and steakhouse mayo on a toasted potato bun.</p>
            </li>
            <li>
              <a href="#">Maverick Ribeye Sandwich</a> - $14.49
              <p>Description: Shaved prime rib topped with onions, mushrooms, and Swiss cheese on French bread.</p>
            </li>
          </ul>


        </div>
        <h3 className
          ="menu-category">Meats</h3>
        <div className='menu-6'>

          <ul className='meats'>
            <li>
              <a href="#">Flo's Filet (6oz)</a>
              <p>$21.99 | (9oz) - $27.49</p>
              <p>Description: A center-cut filet known for its exceptional tenderness, seasoned to perfection.</p>
            </li>
            <li>
              <a href="#">Outlaw Ribeye (20oz)</a> - $27.49
              <p>Description: A bone-in cut, known for its marbling, grilled to enhance its robust flavors.</p>
            </li>
            <li>
              <a href="#">The LongHorn (22oz)</a> - $29.99
              <p>Description: A porterhouse that boasts the flavors of a bone-in strip and the tenderness of a filet.</p>
            </li>
            <li>
              <a href="#">Chop Steak (10oz)</a> - $11.99
              <p>Description: Freshly ground steak draped with grilled mushrooms, sautéed onions, and a rich garlic herb sauce.</p>
            </li>
            <li>
              <a href="#">Renegade Sirloin (6oz)</a>
              <p>$13.49 | (8oz) - $16.49</p>
              <p>Description: A lean USDA Choice center-cut top sirloin that promises a hearty steak experience.</p>
            </li>
            <li>
              <a href="#">Ribeye (12oz)</a> - $22.29
              <p>Description: Known for its juiciness and flavorful marbling, this steak is a carnivore's delight.</p>
            </li>
            <li>
              <a href="#">New York Strip (12oz)</a> - $22.29
              <p>Description: A thick cut that's fire-grilled, amplifying its distinctive taste, making it a steakhouse favorite.</p>
            </li>
            <li>
              <a href="#">Fire-Grilled T-Bone (18oz)</a> - $26.49
              <p>Description: A dual-experience steak offering the marbled flavor of a strip and the softness of a filet.</p>
            </li>
          </ul>


        </div>
        <h3 className
          ="menu-category">Seafood</h3>
        <div className='menu-7'>

          <ul className='seafood'>
            <li>
              <a href="#">6oz. Renegade Sirloin with 8ct. Redrock Grilled Shrimp</a> - $19.49
              <p>Description: A perfect combo of a juicy sirloin paired with grilled shrimp, served over rice with rich garlic butter.</p>
            </li>
            <li>
              <a href="#">6oz. Flo's Filet with 4oz. Lobster Tail</a> - $30.29
              <p>Description: A tender Flo's Filet combined with a buttery lobster tail for an elevated dining experience.</p>
            </li>
            <li>
              <a href="#">4ct. Redrock Grilled Shrimp</a> - $6.49
              <p>Description: Succulent shrimp grilled to perfection, served on a bed of rice with luscious garlic butter.</p>
            </li>
            <li>
              <a href="#">4oz. Lobster Tail</a> - $10.79
              <p>Description: A tender lobster tail, steamed to perfection and served with melted butter for dipping.</p>
            </li>
          </ul>



        </div>
        <h3 className
          ="menu-category">Desserts</h3>
        <div className='menu-8'>

          <ul className='desserts'>
            <li>
              <a href="#">Chocolate Lava Cake</a> - $7.49
              <p>Description: A warm, rich chocolate cake filled with molten chocolate and topped with vanilla ice cream.</p>
            </li>
            <li>
              <a href="#">New York Cheesecake</a> - $7.29
              <p>Description: Creamy and rich className
                ic cheesecake topped with a sweet strawberry sauce.</p>
            </li>
            <li>
              <a href="#">Key Lime Pie</a> - $7.29
              <p>Description: A tangy and sweet dessert with a crumbly crust, topped with whipped cream.</p>
            </li>
            <li>
              <a href="#">Molten Chocolate Chip Cookie Sundae</a> - $7.49
              <p>Description: A warm chocolate chip cookie, baked in a skillet, topped with vanilla ice cream and drizzled with chocolate sauce.</p>
            </li>
          </ul>



        </div>
        <h3 className
          ="menu-category">Beverages</h3>
        <div className='menu-9'>

          <ul>
            <li>
              <a href="#">Raspberry Lemonade</a> - $3.29
              <p>Description: A refreshing blend of sweet raspberries and tart lemonade, perfect for quenching your thirst.</p>
            </li>
            <li>
              <a href="#">Freshly Brewed Iced Tea</a> - $2.99
              <p>Description: className
                ic iced tea, brewed fresh and served cold with a slice of lemon.</p>
            </li>
            <li>
              <a href="#">Mango Lemonade</a> - $3.29
              <p>Description: A tropical twist on traditional lemonade with the sweet flavor of ripe mangoes.</p>
            </li>
            <li>
              <a href="#">LongHorn Chili Lime Ginger Ale</a> - $3.29
              <p>Description: A zesty and spicy drink with a hint of lime and ginger, providing a unique refreshing experience.</p>
            </li>
            <li>
              <a href="#">Fountain Drinks</a> - $2.99
              <p>Description: A selection of popular sodas, served cold with ice.</p>
            </li>
            <li>
              <a href="#">Bottled Water</a> - $2.99
              <p>Description: Crisp and clean bottled water to hydrate and refresh.</p>
            </li>
          </ul>


        </div>
      </div>
    </div>
  );
}

export default MenuList;
