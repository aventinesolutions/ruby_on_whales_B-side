# enables the PostgreSQL extension required for using UUID as primary keys
class EnableUuid < ActiveRecord::Migration[6.0]
  def change
    enable_extension 'pgcrypto'
  end
end
