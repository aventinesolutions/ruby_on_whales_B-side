require 'rails_helper'

module Types
  RSpec.describe QueryType, type: :graphql_type do
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

    describe 'ratings' do
      let!(:account) { create :account }
      let!(:ratings) { create_list :rating, 2, account: account }

      context 'when given a valid Account id' do
        let(:query) do
          %Q[query {
          ratings( accountId: "#{account.id}" ) {
            id
            whiskeyId
            quality
            stars
         }
       }]
        end

        specify 'returns all ratings for the account' do
          data = result.dig('data', 'ratings')
          expect(data.map { |w| w['id'] }).to match_array(ratings.map(&:id))
          expect(data.map { |w| w['whiskeyId'] }).to match_array(ratings.map(&:whiskey_id))
          expect(data.map { |w| w['quality'] }).to match_array(ratings.map(&:quality))
          expect(data.map { |w| w['stars'] }).to match_array(ratings.map(&:stars))
        end
      end

      context 'when given an invalid Account id' do
        let(:query) do
          %q(query {
          ratings( accountId: "plim" ) {
            id
            whiskeyId
            quality
            stars
         }
       })
        end

        specify 'returns an empty list' do
          expect(result.dig('data', 'ratings')).to eq([])
        end
      end
    end

    describe 'search' do
      let!(:account) { create :account }
      let!(:whiskeys) do
        [
          create(:whiskey, description: "binaughty #{Faker::Lorem.sentence}"),
          create(:whiskey),
          create(:whiskey, title: 'Bemb Binaughty'),
          create(:whiskey, :with_ratings, title: 'The Vampire Slayer, Mighty Binaughty', account: account)
        ]
      end

      context 'when not filtered by existing ratings' do
        let(:query) do
          %Q[query {
           search( filter: { accountId: "#{account.id}" text: "binaughty" } )
             {
               id
               ratings {
                 id
               }
             }
           }]
        end

        specify 'returns correct filtered whiskeys' do
          data = result.dig('data', 'search').map { |w| w['id'] }
          expect(data).to include(whiskeys[0].id)
          expect(data).not_to include(whiskeys[1].id)
          expect(data).to include(whiskeys[2].id)
          expect(data).to include(whiskeys[3].id)
        end

        specify 'returns the ratings for the Account when available' do
          data = result.dig('data', 'search').map { |w| w['ratings'] }
          expect(data).to include([])
          expect(data).to include(whiskeys[3].ratings.map { |r| { 'id' => r.id } })
        end
      end

      context 'when filtered by existing ratings' do
        let(:query) do
          %Q[query {
           search( filter: { accountId: "#{account.id}" text: "binaughty" ratingsFilter: "minimum_5stars" } )
             {
               id
               ratings {
                 id
               }
             }
           }]
        end

        specify 'returns correct filtered whiskeys' do
          data = result.dig('data', 'search').map { |w| w['id'] }
          expect(data).not_to include(whiskeys[0].id)
          expect(data).not_to include(whiskeys[1].id)
          expect(data).not_to include(whiskeys[2].id)
          expect(data).to include(whiskeys[3].id)
        end

        specify 'returns the ratings for the Account when available' do
          data = result.dig('data', 'search').map { |w| w['ratings'] }
          expect(data).to include(whiskeys[3].ratings.map { |r| { 'id' => r.id } })
        end
      end
    end
  end
end
