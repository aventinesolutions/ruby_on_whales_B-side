# the whiskey model
class Whiskey < ApplicationRecord
  include PgSearch::Model
  has_one_attached :photo
  has_many :ratings, inverse_of: :whiskey, dependent: :destroy
  pg_search_scope :search_text, against: %i[title description]

  scope :minimum_5stars, -> { joins(:ratings).where(ratings: { stars: :five }).uniq }
  scope :minimum_4stars, -> { joins(:ratings).where(ratings: { stars: %i[four five] }).uniq }
  scope :minimum_3stars, -> { joins(:ratings).where(ratings: { stars: %i[three four five] }).uniq }
  scope :minimum_2stars, -> { joins(:ratings).where(ratings: { stars: %i[two three four five] }).uniq }
  scope :minimum_1star, -> { joins(:ratings).where(ratings: { stars: %i[one two three four five] }).uniq }
end
