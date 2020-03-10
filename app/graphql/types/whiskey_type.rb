module Types
  # the GraphQl type for Whiskeys
  class WhiskeyType < Types::BaseObject
    field :id, ID, null: false
    field :description, String, null: false
    field :price, Float, null: false
  end
end
