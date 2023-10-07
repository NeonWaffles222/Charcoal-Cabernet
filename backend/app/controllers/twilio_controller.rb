
class TwilioController < ApplicationController
  include TwilioHelper

  def confirmation_sms
    # order = current_user.orders.last
    # order.update(status: 'confirmed')
    render json: confirmation_message
  end

  def prepping_sms
    # order = current_user.orders.last
    # order.update(status: 'prepping')
    render json: prepping_message
  end

  def enroute_sms
    # order = current_user.orders.last
    # order.update(status: 'enroute')
    render json: enroute_message
  end

  def delivered_sms
    # order = current_user.orders.last
    # order.update(status: 'delivered')
    render json: delivered_message
  end


end
