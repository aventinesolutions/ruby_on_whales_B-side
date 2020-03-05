require 'rails_helper'

RSpec.describe 'pages/home.html.erb', type: :view do

  context 'when account is logged in' do
    let!(:account) { create :account }
    before { sign_in(account) }

    specify 'shows that user is logged in' do
      render
      expect(rendered).to contain(account.email)
    end
  end
end
