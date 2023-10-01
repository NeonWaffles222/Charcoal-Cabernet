
class TwilioController < ApplicationController
  include TwilioHelper

  def confirmation_sms
    render json: confirmation_message
  end

  def prepping_sms
    render json: prepping_message
  end

  def enroute_sms
    render json: enroute_message
  end

  def delivered_sms
    render json: delivered_message
  end


end
