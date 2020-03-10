module Types
  # the GraphQl type for Whiskeys
  class WhiskeyType < Types::BaseObject
    include Rails.application.routes.url_helpers

    field :id, ID, null: false
    field :description, String, null: true
    field :price, Float, null: true
    field :photo_url, String, null: true

    def photo_url
      return unless object.photo.attached?
      rails_blob_url(object.photo, only_path: true)
    end
  end
end
