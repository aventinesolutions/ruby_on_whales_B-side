require 'rails_helper'

RSpec.describe 'big fail' do
  subject { build :frimmel }
  its(:bemb) { is_expected.to be false }
end
