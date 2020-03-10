require 'rails_helper'

RSpec.feature 'must sign in with an account', type: :feature do
  scenario 'user must sign in' do
    @password = SecureRandom.base64(10)
    @account = create :account, password: @password
    visit '/'
    expect(page).to have_css('//a[href$="sign_in"]')
    click_on 'Sign In'
    fill_in 'account[email]', with: @account.email
    fill_in 'account[password]', with: @password
    click_button 'Log in'
    expect(page).to have_css('//a[href$="sign_out"]')
  end
end
