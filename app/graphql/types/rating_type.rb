module Types
  # a GraphQL type for Ratings
  class RatingType < Types::BaseObject
    field :id, ID, null: false
    field :whiskey_id, ID, null: false
    field :account_id, ID, null: false
    field :quality, String, null: false
    field :stars, String, null: false
  end
end
