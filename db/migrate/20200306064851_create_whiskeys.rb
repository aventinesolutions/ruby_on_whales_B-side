# table for whiskeys
class CreateWhiskeys < ActiveRecord::Migration[6.0]
  def change
    create_table :whiskeys, id: :uuid do |t|
      t.string :title, null: false
      t.string :description
      t.decimal :price, default: 0.0, null: false, precision: 12, scale: 2
      t.timestamps
    end

    add_index :whiskeys, :title
  end
end
