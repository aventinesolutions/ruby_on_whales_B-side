require 'rails_helper'

RSpec.describe 'Pages', type: :request do
  describe 'GET /' do
    context 'when not yet logged in' do
      before { get '/' }

      specify 'should require log in' do
        expect(response).to have_http_status(200)
        expect(response).to render_template(:home)
        expect(/sign_in/.match(response.body)).to be_truthy
      end
    end

    context 'when logged in' do
      let!(:account) { create :account }
      before { sign_in(account) }
      before { get '/' }

      specify 'comes to home page logged in' do
        expect(response).to have_http_status(:success)
        expect(response).to render_template(:home)
        expect(/sign_out/.match(response.body)).to be_truthy
      end
    end
  end
end
