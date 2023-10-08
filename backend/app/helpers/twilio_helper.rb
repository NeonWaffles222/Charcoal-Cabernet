module TwilioHelper

    def confirmation_message
      require 'rubygems'
      require 'twilio-ruby'
  
      account_sid = ENV['TWILIO_ACCOUNT_SID']
      auth_token = ENV['TWILIO_AUTH_TOKEN']
      @client = Twilio::REST::Client.new(account_sid, auth_token)
        
        message = @client.messages
        .create(
           from: ENV["TWILIO_PHONE_NUMBER"],
           body: 'Your order has been confirmed!',
           to: "------PHONE NUMBER------"
         )
        message.body
    end

  def prepping_message
    require 'rubygems'
    require 'twilio-ruby'

    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    @client = Twilio::REST::Client.new(account_sid, auth_token)
      
      message = @client.messages
      .create(
         from: ENV["TWILIO_PHONE_NUMBER"],
         body: 'Your dishes are currently being prepared!',
         to: "------PHONE NUMBER------"
       )
      message.body
  end

  def enroute_message
    require 'rubygems'
    require 'twilio-ruby'

    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    @client = Twilio::REST::Client.new(account_sid, auth_token)
      
      message = @client.messages
      .create(
         from: ENV["TWILIO_PHONE_NUMBER"],
         body: 'Your order is on the way!',
         to: "------PHONE NUMBER------"
       )
      message.body
  end

  def delivered_message
    require 'rubygems'
    require 'twilio-ruby'

    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
    @client = Twilio::REST::Client.new(account_sid, auth_token)
      
      message = @client.messages
      .create(
         from: ENV["TWILIO_PHONE_NUMBER"],
         body: 'Your order have arrived!',
         to: "------PHONE NUMBER------"
       )
      message.body
  end

end
