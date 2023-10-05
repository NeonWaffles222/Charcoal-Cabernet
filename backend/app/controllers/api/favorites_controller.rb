class Api::FavoritesController < ApplicationController
  # before_action :authenticate_user
  skip_before_action :verify_authenticity_token

  # Index action to retrieve user's favorite dishes
  def index
    # @User = User.first
    # favorites = @User.favorites
    favorites = Favorite.all
    results= favorites.map{|favorite| Dish.find(favorite.dish_id)}
    render json: results
  end

  # Create action to add a dish to user's favorites
  def create
    puts params[:dish_id]

    dish = Dish.find(params[:dish_id])
    user= User.find(params[:user_id])
    # favorite = User.first.favorites(dish_id: dish.id)
    favorite = Favorite.create(dish_id: dish.id, user_id: user.id)

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
