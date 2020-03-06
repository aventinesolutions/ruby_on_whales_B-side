FactoryBot.define do
  factory :rating do
    association :account, factory: :account
    association :whiskey, factory: :whiskey
    stars { :no_stars }
  end
end
