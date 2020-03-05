require 'rails_helper'

RSpec.describe 'big fail' do
  subject { OpenStruct.new(frimmel: true) }
  its(:frimmel) { is_expected.to be false }
end
