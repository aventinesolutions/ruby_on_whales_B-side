require 'search_object'
require 'search_object/plugin/graphql'

module Resolvers
  # a GraphQL resolver for the Whiskey search
  class Search
    include SearchObject.module(:graphql)

    scope { Whiskey.all }

    type types[Types::WhiskeyType]

    # a simple filter input object for text
    class TextFilter < ::Types::BaseInputObject
      argument :text, String, required: true
    end

    option :filter, type: TextFilter, with: :apply_filter

    def apply_filter(scope, value)
      scope.search_text(value[:text])
    end
  end
end
