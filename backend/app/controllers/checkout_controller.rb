class CheckoutController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    # content_type 'application/json'
  customer=Stripe::Customer.create({
    name: "Colin",
    email: "aca@gmail.com",
    description: "Customer id 1",

  })

    session = Stripe::Checkout::Session.create({
      line_items: [{
        'price_data': {
          currency: "CAD",
          product_data: {
              name: "Steak",
          },
          unit_amount: 3000,
      }, 
        quantity: 1,
      }],
      mode: 'payment',
      success_url: "http://localhost:3000/" + '?success=true',
      cancel_url: "http://localhost:3000/" + '?canceled=true',
      customer: customer
    })
    puts session
    redirect_to session.url, allow_other_host: true
  end

  def payment_intent 
    payment_intent = Stripe::PaymentIntent.create({
      amount: 10000,
      currency: "CAD"
    })
    
    render json: payment_intent.client_secret
  end

  private

  def order_params 
    raise :price_data
    params.require(:price_data)
  end

end
