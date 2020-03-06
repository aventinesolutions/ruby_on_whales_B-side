FactoryBot.define do
  factory :whiskey do
    description { Faker::Lorem.paragraph }
    price { rand(1000..100_000) / 100 }
    transient { photo_file { Rails.root.join('spec', 'factories', 'photos', '243055-normal.png') } }
    after(:create) do |whiskey, evaluator|
      whiskey.photo.attach(io: File.open(evaluator.photo_file),
                           filename: '243055-normal.png',
                           content_type: 'image/png')
    end
  end
end
