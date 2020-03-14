# the whiskey model
class Whiskey < ApplicationRecord
  include PgSearch::Model
  has_one_attached :photo
  pg_search_scope :search_text, against: %i[title description]
end
