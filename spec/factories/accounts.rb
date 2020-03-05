FactoryBot.define do
  factory :account do
    email { Faker::Internet.email }
  end
end
