module Types
  # GraphQL Base Field
  class BaseField < GraphQL::Schema::Field
    argument_class Types::BaseArgument
  end
end
