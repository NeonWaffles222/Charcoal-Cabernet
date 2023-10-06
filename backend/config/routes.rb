Rails.application.routes.draw do
  resources :tables, :specials, :categories, :dishes, :users, :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/confirmation_sms", to: "twilio#confirmation_sms" 

  get "/prepping_sms", to: "twilio#prepping_sms"

  get "/enroute_sms", to: "twilio#enroute_sms"

  get "/delivered_sms", to: "twilio#delivered_sms"

  namespace :api do
    resources :favorites, only: [:index, :create, :destroy]
  end
  

  
  #For orders
  resources :orders, only: [:create]
  get '/orders.json', to: 'orders#index'
  #For stripe
  resources :checkout, only: [:create]
  post "/create_payment_intent", to: "checkout#payment_intent"



end
