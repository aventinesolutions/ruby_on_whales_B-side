# Rating model for a given Whiskey and a given Account
class Rating < ApplicationRecord
  enum quality: %i[taste color smokiness]
  enum stars: %i[no_stars one two three four five]
  belongs_to :account
  belongs_to :whiskey
  validates :account, presence: true
  validates :whiskey, presence: true
  validates :quality, uniqueness: { scope: %i[account_id whiskey_id] }
end
