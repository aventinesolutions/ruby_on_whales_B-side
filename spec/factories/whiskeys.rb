FactoryBot.define do
  factory :whiskey do
    title { Faker::Creature::Horse.name }
    description { Faker::Lorem.paragraph }
    price { rand(1000..100_000) / 100 }
    transient { photo_file { Rails.root.join('spec', 'factories', 'photos', '243055-normal.png') } }
    after(:create) do |whiskey, evaluator|
      whiskey.photo.attach(io: File.open(evaluator.photo_file),
                           filename: '243055-normal.png',
                           content_type: 'image/png')
    end

    trait :with_ratings do
      transient do
        account { create :account }
        qualities { %i[taste color smokiness] }
        stars { :five }
      end
      after(:create) do |whiskey, evaluator|
        evaluator.qualities.each do |quality|
          whiskey.ratings.create!(account: evaluator.account, quality: quality, stars: evaluator.stars)
        end
        whiskey
      end
    end
  end
end
