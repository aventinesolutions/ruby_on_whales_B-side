require 'rails_helper'

RSpec.describe 'pages/home.html.erb', type: :view do
  include Devise::Test::ControllerHelpers
  include Warden::Test::Helpers
  before(:each) { Warden.test_mode! }
  after(:each) { Warden.test_reset! }

  context 'when account is not logged in' do
    specify 'allows the user to log in' do
      render
      assert_select('a') do |element|
        expect(/sign_in/.match(element.first[:href])).to be_truthy
      end
      assert_select('#root', false)
    end
  end

  context 'when account is logged in' do
    let!(:account) { create :account }
    before { sign_in(account) }

    specify 'shows that user is logged in' do
      render
      assert_select('a') do |element|
        expect(/sign_out/.match(element.first[:href])).to be_truthy
      end
      assert_select('#root') do |element|
        expect(element.first['data-account-id']).to eq(account.id)
      end
    end
  end
end
