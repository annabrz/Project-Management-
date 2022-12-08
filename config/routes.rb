Rails.application.routes.draw do
  
  resources :tasks , only: [:show, :create, :index, :destroy]
  resources :projects, only: [:show, :create, :index, :update, :destroy]
  resources :managers
  resources :employees
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
