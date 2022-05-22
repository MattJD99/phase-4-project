Rails.application.routes.draw do
  resources :users, only: [:update, :destroy]
  resources :workouts
  resources :exercises

  post "/auth/:provider/callback", to: "sessions#omniauth"
  
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/users", to: "users#destroy"

  get "/profile", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  get "./client/public/favicon.ico", to: "fallback#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
