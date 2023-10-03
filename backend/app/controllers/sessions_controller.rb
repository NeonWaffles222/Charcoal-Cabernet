class SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create

    puts "PARAMS: #{params}"

    if user = User.authenticate_with_credentials(params[:session][:email], params[:session][:password])
      session[:user_id] = user.id
      @user = User.where('lower(email) = ?', params[:session][:email].strip.downcase).first
      render json: @user
    end
  end

  def destroy
    session[:user_id] = nil
  end

end
