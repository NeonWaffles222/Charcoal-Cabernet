Rails.application.routes.draw do
  resources :tables
  resources :specials
  resources :categories
  resources :dishes
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
