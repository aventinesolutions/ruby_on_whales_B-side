module Types
  # GraphQL Query Types
  class QueryType < Types::BaseObject
    field :whiskeys,
          [Types::WhiskeyType],
          null: false,
          description: 'Returns a list of whiskeys'

    def whiskeys
      Whiskey.all
    end
  end
end
