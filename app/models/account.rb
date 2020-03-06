# Account model for authentication with Devise
class Account < ApplicationRecord
  devise :database_authenticatable
end
