module Types
  # GraphQL Mutation Type
  class MutationType < Types::BaseObject
    field :rate_whiskey, mutation: Mutations::RateWhiskey, null: false
  end
end
