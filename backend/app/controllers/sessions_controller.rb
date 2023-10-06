class SessionsController < ApplicationController
  require 'jwt'
  skip_before_action :verify_authenticity_token

  def index
    token = request.headers['Authorization'].split(' ').last
    begin
      decoded_token = JWT.decode(token, '12345', true, algorithm: 'HS256')
      puts 'decodetoken', decoded_token
      user_id = decoded_token.first['user_id']
      @current_user = User.find_by_id(user_id)
    rescue JWT::DecodeError
      puts 'decode error'
    end

    render json: @current_user
  end

  def create

    if user = User.authenticate_with_credentials(params[:session][:email], params[:session][:password])
      session[:user_id] = user.id
      token = JWT.encode({user_id: user.id}, '12345', 'HS256')
      render json: {user: user, token: token}
    else
      render json: user
    end
  end

  def destroy
    session[:user_id] = nil
  end

end


