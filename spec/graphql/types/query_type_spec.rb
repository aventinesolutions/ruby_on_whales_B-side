require 'rails_helper'

RSpec.describe Types::QueryType, type: :graphql_type do
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::NumberHelper

  describe 'whiskeys' do
    let!(:whiskeys) { create_list :whiskey, 2 }

    let(:query) do
      %(query {
         whiskeys {
            id
            title
            description
            price
            photoUrl
         }
       })
    end

    subject(:result) { RubyOnWhalesBSideSchema.execute(query).as_json }

    specify 'returns all whiskeys' do
      data = result.dig('data', 'whiskeys')
      expect(data.map { |w| w['id'] }).to match_array(whiskeys.map(&:id))
      expect(data.map { |w| w['title'] }).to match_array(whiskeys.map(&:title))
      expect(data.map { |w| w['description'] }).to match_array(whiskeys.map(&:description))
      expect(data.map { |w| w['price'] }).to match_array(whiskeys.map { |w| number_to_currency(w.price, unit: '€ ') })
      expect(data.map { |w| w['photoUrl'] }).to(
        match_array(whiskeys.map { |w| rails_blob_url(w.photo, only_path: true) })
      )
    end
  end
end
