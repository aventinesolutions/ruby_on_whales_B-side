module Mutations
  # a mutation for rating Whiskeys
  class RateWhiskey < BaseMutation
    argument :account_id, String, required: true
    argument :whiskey_id, String, required: true
    argument :quality, String, required: true
    argument :stars, String, required: true

    type Types::RatingType

    def resolve(account_id:, whiskey_id:, quality:, stars:)
      rating = Rating.find_or_create_by!(account_id: account_id,
                                whiskey_id: whiskey_id,
                                quality: quality) do |rating|
      end
      rating.update_attributes!(stars: stars)
      rating
    end
  end
end
