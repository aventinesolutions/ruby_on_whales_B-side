require 'rails_helper'

RSpec.describe Account, type: :model do
  it { is_expected.to have_db_column(:email).of_type(:string).with_options(null: false, default: '') }
  it { is_expected.to have_db_column(:encrypted_password).of_type(:string).with_options(null: false, default: '') }
  it { is_expected.to have_db_index(:email) }
end
