require 'rails_helper'

module Mutations
  RSpec.describe RateWhiskey, type: :request do
    let!(:account) { create :account }
    let!(:whiskey) { create :whiskey }

    let!(:query) do
      lambda do |quality, stars|
        <<-GQL
           mutation {
            rateWhiskey(accountId: "#{account.id}",
                        whiskeyId: "#{whiskey.id}",
                        quality: "#{quality}",
                        stars: "#{stars}") {
              id
              whiskeyId
              accountId
              quality
              stars
            }
          }
        GQL
      end
    end

    describe '.resolve' do
      specify 'updates the rating for a Whiskey from an Account' do
        post '/graphql', params: { query: query.call('smokiness', 'three') }
        expect(whiskey.reload.ratings.find_by(account: account, quality: 'smokiness').stars).to eq('three')
      end

      specify 'returns the new rating' do
        post '/graphql', params: { query: query.call('taste', 'one') }
        data = JSON.parse(response.body)['data']['rateWhiskey']
        expect(data).to include(
          'id' => be_present,
          'whiskeyId' => whiskey.id,
          'accountId' => account.id,
          'quality' => 'taste',
          'stars' => 'one'
        )
      end
    end
  end
end
