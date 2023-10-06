class Api::FavoritesController < ApplicationController
  # before_action :authenticate_user
  skip_before_action :verify_authenticity_token

  # Index action to retrieve user's favorite dishes
  def index
    @User = getUser
    # @User = User.first

    favorites = @User.favorites
    # favorites=Favorite.all
    results= favorites.map{|favorite| Dish.find(favorite.dish_id)}
    render json: results
  end

  # Create action to add a dish to user's favorites
  def create
    puts params[:dish_id]
    @User=getUser
    if @User
      user_id=@User.id
    else
      user_id=nil
      puts "Couldn't find user with a token"
    end
    # Customer.where(first_name: 'Lifo').take
    dish = Dish.find(params[:dish_id])
    userFavorite = Favorite.where(user_id: user_id, dish_id: dish.id).first
   if !userFavorite
    favorite = Favorite.create(dish_id: dish.id, user_id: user_id)
   else
    favorite = userFavorite
   end

    if favorite.save
      render json: favorite
    else
      puts favorite.errors.full_messages
      render json: { error: 'Unable to add to favorites' }, status: :unprocessable_entity
    end
  end

  # Destroy action to remove a dish from user's favorites
  def destroy
    current_user = getUser
    favorite = current_user.favorites.find(params[:id])
    favorite.destroy
    head :no_content
  end

private
  def getUser
    user=nil
    token = request.headers['Authorization'].split(' ').last
    begin
      decoded_token = JWT.decode(token, '12345', true, algorithm: 'HS256')
      puts 'decodetoken', decoded_token
      user_id = decoded_token.first['user_id']
      user = User.find_by_id(user_id)
    rescue JWT::DecodeError
      puts 'decode error'
    end
    user
  end
  # Other actions as needed
end
