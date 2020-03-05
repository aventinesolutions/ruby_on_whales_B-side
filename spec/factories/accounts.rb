FactoryBot.define do
  factory :account do
    email { Faker::Internet.email }
    transient { password { SecureRandom.base64(10) } }
    after(:build) do |account, evaluator|
      account.update(password: evaluator.password, password_confirmation: evaluator.password)
    end
  end
end
