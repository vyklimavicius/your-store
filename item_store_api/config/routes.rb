Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1 do
    resources :items, only: [:index]
  end
  # post "", to "autho# "
  post '/login', to: "autho#login"
  resources :users, only: [:index, :create, :destroy]
  resources :carts, only: [:index, :create, :destroy]

end
