module Types
  # the GraphQl type for Whiskeys
  class WhiskeyType < Types::BaseObject
    include Rails.application.routes.url_helpers
    include ActionView::Helpers::NumberHelper

    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :price, String, null: true
    field :photo_url, String, null: true

    def price
      number_to_currency(object.price, unit: '€ ')
    end

    def photo_url
      return unless object.photo.attached?

      rails_blob_url(object.photo, only_path: true)
    end
  end
end
