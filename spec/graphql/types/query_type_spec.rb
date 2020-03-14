require 'rails_helper'

RSpec.describe Types::QueryType, type: :graphql_type do
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::NumberHelper

  subject(:result) { RubyOnWhalesBSideSchema.execute(query).as_json }

  describe 'whiskeys' do
    let!(:whiskeys) { create_list :whiskey, 2 }

    let(:query) do
      %q(query {
          whiskeys {
            id
            title
            description
            price
            photoUrl
         }
       })
    end

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

  describe 'search' do
    let!(:account) { create :account }
    let!(:whiskeys) do
      [
        create(:whiskey, description: "binaughty #{Faker::Lorem.sentence}"),
        create(:whiskey),
        create(:whiskey, title: 'Bemb Binaughty')
      ]
    end

    let(:query) { %Q[query { search( filter: { accountId: "#{account.id}" text: "binaughty" } ) { id } }] }

    specify 'returns correct filtered whiskeys' do
      data = result.dig('data', 'search').map { |w| w['id'] }
      expect(data).to include(whiskeys[0].id)
      expect(data).not_to include(whiskeys[1].id)
      expect(data).to include(whiskeys[2].id)
    end
  end
end
