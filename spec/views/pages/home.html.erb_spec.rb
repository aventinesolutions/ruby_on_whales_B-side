require 'rails_helper'

RSpec.describe 'pages/home.html.erb', type: :view do
  context 'when account is not logged in' do
    pending 'TODO: solve problem with Devise and Warden test helpers'
    # specify 'allows the user to log in' do
    #   render
    #   expect(rendered).not_to contain(account.email)
    # end
  end

  context 'when account is logged in' do
    let!(:account) { create :account }
    before { sign_in(account) }

    pending 'TODO: solve problem with Devise and Warden test helpers'
    # specify 'shows that user is logged in' do
    #   render
    #   expect(rendered).to contain(account.email)
    # end
  end
end
