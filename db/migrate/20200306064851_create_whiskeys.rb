# table for whiskeys
class CreateWhiskeys < ActiveRecord::Migration[6.0]
  def change
    create_table :whiskeys, id: :uuid do |t|
      t.string :description
      t.decimal :price, default: 0.0, null: false, precision: 12, scale: 2
      t.timestamps
    end
  end
end
