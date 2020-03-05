require 'sidekiq/web'

Rails.application.routes.draw do
  devise_for :accounts
  mount Sidekiq::Web => '/sidekiq'
end
