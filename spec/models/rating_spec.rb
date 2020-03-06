require 'rails_helper'

RSpec.describe Rating, type: :model do
  it { is_expected.to have_db_column(:account_id).with_options(null: false, type: :uuid) }
  it { is_expected.to have_db_column(:whiskey_id).with_options(null: false, type: :uuid) }

  it { is_expected.to belong_to(:account) }
  it { is_expected.to belong_to(:whiskey) }

  it { is_expected.to validate_presence_of(:account) }
  it { is_expected.to validate_presence_of(:whiskey) }
  it { is_expected.to validate_uniqueness_of(:whiskey).scoped_to(:account_id) }

  it { is_expected.to have_db_index(%i[account_id whiskey_id]).unique(true) }

  describe 'enum #stars' do
    let(:account) { create :account }
    let(:whiskey) { build :whiskey }
    before { whiskey.save! }

    subject { create :rating, account: account, whiskey: whiskey }

    specify '#stars' do
      expect(subject.stars).to eq('no_stars')
      expect(subject.no_stars?).to be_truthy
      expect(subject.five?).to be_falsey
      subject.update!(stars: :five)
      expect(subject.no_stars?).to be_falsey
      expect(subject.five?).to be_truthy
      expect(subject.stars).to eq('five')
    end
  end
end
