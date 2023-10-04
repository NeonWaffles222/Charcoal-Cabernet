class SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create

    if user = User.authenticate_with_credentials(params[:session][:email], params[:session][:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: user
    end
  end

  def destroy
    session[:user_id] = nil
  end

end
