# frozen_string_literal: true

class DeviseCreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts, id: :uuid do |t|
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.timestamps null: false
    end
    add_index :accounts, :email,                unique: true
  end
end
