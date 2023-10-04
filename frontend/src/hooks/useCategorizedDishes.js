
export const useCategorizeDishes = (dishes, categories) => {
  // create an object that holds the category as the key and an array of dishes as values
  const categorized = {};

  // mapping category id -> name
  const categoryIdToName = {};
  categories.forEach(category => {
    categoryIdToName[category.id] = category.name;
  });

  // go through each dish and categorize them
  dishes.forEach(dish => {
    const categoryName = categoryIdToName[dish.category_id];

    // if the category hasn't been added to the categorized object -> add it
    if (!categorized[categoryName]) {
      categorized[categoryName] = [];
    }

    // push the dish to the appropriate category array
    categorized[categoryName].push(dish);
  });

  return categorized;
};