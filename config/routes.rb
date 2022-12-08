Rails.application.routes.draw do
<<<<<<< HEAD
  
  resources :tasks , only: [:show, :create, :index, :destroy]
  resources :projects, only: [:show, :create, :index, :update, :destroy]
  resources :managers
  resources :employees
=======
  resources :users
  resources :tasks
  resources :projects

>>>>>>> 13b047ad2e6b607ad301fb7168401c490c5e7239
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
