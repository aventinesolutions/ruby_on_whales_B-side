# to create a table for Whiskey Ratings by Account
class CreateRatings < ActiveRecord::Migration[6.0]
  def up
    execute <<-SQL
      CREATE TYPE rating_quality_t AS ENUM('taste', 'color', 'smokiness');
      CREATE TYPE rating_stars_t AS ENUM('no_stars', 'one', 'two', 'three', 'four', 'five');
    SQL

    create_table :ratings, id: :uuid do |t|
      t.references :account, type: :uuid, null: false
      t.references :whiskey, type: :uuid, null: false
      t.integer :quality, type: :rating_quality_t, null: false, default: 0
      t.integer :stars, type: :rating_stars_t, null: false, default: 0
      t.timestamps
    end
    add_foreign_key :ratings, :accounts, name: :fk_ratings_accounts
    add_foreign_key :ratings, :whiskeys, name: :fk_ratings_whiskeys
    add_index :ratings, %i[account_id whiskey_id], name: :ratings_account_whiskey_unique_index, unique: true
  end

  def down
    drop_table :ratings
    execute <<-SQL
      DROP TYPE rating_stars_t;
      DROP TYPE rating_quality_t;
    SQL
  end
end
