require 'rails_helper'

RSpec.describe Whiskey, type: :model do
  it { is_expected.to have_db_column(:description).of_type(:string) }
  specify 'price column' do
    expect(subject).to(have_db_column(:price).of_type(:decimal)
                         .with_options(null: false, default: 0.0, precision: 12, scale: 2))
  end

  describe 'attached #photo' do
    subject { create :whiskey }
    specify 'photo is attached' do
      expect(subject.photo).to be_an_instance_of(ActiveStorage::Attached::One)
      expect(subject.photo.image?).to be_truthy
      expect(subject.photo.byte_size).to be(62_755)
    end
  end
end