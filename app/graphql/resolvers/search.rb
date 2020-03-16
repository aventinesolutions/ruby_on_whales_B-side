require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers
  # a GraphQL resolver for the Whiskey search
  class Search
    include SearchObject.module(:graphql)

    scope { Whiskey.all }

    type types[Types::WhiskeyType]

    # a simple filter input object for Account ID and text
    class TextFilter < ::Types::BaseInputObject
      argument :account_id, String, required: true
      argument :text, String, required: true
      argument :ratings_filter, String, required: false
    end

    option :filter, type: TextFilter, with: :apply_filter

    def apply_filter(scope, value)
      begin
        Account.find(value[:account_id])
      rescue ActiveRecord::RecordNotFound
        return []
      end
      return apply_with_ratings_filter(scope, value, value[:ratings_filter]) if value[:ratings_filter].present?

      apply_without_ratings_filter(scope, value)
    end

    def apply_without_ratings_filter(scope, value)
      scope.search_text(value[:text]).left_outer_joins(:ratings)
           .where(ratings: { account_id: value[:account_id] })
           .or(scope.search_text(value[:text]).left_outer_joins(:ratings)
           .where(ratings: { id: nil })).uniq
    end

    def apply_with_ratings_filter(scope, value, filter)
      scope.send(filter).search_text(value[:text])
           .where(ratings: { account_id: value[:account_id] }).uniq
    end
  end
end
