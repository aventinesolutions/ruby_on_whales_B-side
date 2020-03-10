module Types
  # GraphQL Base Object
  class BaseObject < GraphQL::Schema::Object
    field_class Types::BaseField
  end
end
