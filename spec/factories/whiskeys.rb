FactoryBot.define do
  factory :whiskey do
    description { Faker::Lorem.paragraph }
    price { rand(1000..100_000) / 100 }
  end
end
