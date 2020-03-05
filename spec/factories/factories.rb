FactoryBot.define do
  factory :frimmel, class: OpenStruct do
    before(:build) do |_, _|
      OpenStruct.new(bemb: true)
     end
  end
end
