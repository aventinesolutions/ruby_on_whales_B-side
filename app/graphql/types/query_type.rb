module Types
  # GraphQL Query Types
  class QueryType < Types::BaseObject
    field :whiskeys,
          [Types::WhiskeyType],
          null: false,
          description: 'Returns a list of whiskeys'

    field :ratings, [Types::RatingType],
          null: false,
          description: 'Returns a list of Ratings' do
      argument :account_id, ID, required: false
    end

    field :search,
          resolver: Resolvers::Search,
          description: 'Search query for text with Account scope'

    def whiskeys
      Whiskey.all
    end

    def ratings(account_id: nil)
      return Rating.all if account_id.blank?

      Rating.where(account_id: account_id)
    end
  end
end
