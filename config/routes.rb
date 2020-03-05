require 'sidekiq/web'

Rails.application.routes.draw do
  root 'pages#home'
  devise_for :accounts
  mount Sidekiq::Web => '/sidekiq'
end

