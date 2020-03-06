require 'rails_helper'

RSpec.describe 'Pages', type: :request do
  describe 'GET /home' do
    context 'when not yet logged in' do
      specify 'should require log in' do
        get '/pages/home'
        expect(response).to have_http_status(403)
        expect(response).not_to render_template(:home)
      end
    end

    context 'when logged in' do
      let!(:account) { create :account }
      before { sign_in(account) }

      pending 'TODO: solve problem with Devise and Warden test helpers'
      # specify 'comes to home page logged in' do
      #   get '/pages/home'
      #   expect(response).to have_http_status(:success)
      #   expect(response).not_to render_template(:home)
      # end
    end
  end
end
