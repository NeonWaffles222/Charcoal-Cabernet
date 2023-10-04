class Api::FavoritesController < ApplicationController
  before_action :authenticate_user

  # Index action to retrieve user's favorite dishes
  def index
    favorites = current_user.favorite_dishes
    render json: favorites
  end

  # Create action to add a dish to user's favorites
  def create
    dish = Dish.find(params[:dish_id])
    favorite = current_user.favorites.build(dish: dish)
    if favorite.save
      render json: favorite
    else
      render json: { error: 'Unable to add to favorites' }, status: :unprocessable_entity
    end
  end

  # Destroy action to remove a dish from user's favorites
  def destroy
    favorite = current_user.favorites.find(params[:id])
    favorite.destroy
    head :no_content
  end

  # Other actions as needed
end
