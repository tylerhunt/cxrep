class CreateUsers < ActiveRecord::Migration[8.1]
  def change
    create_table :users, id: :uuid, default: 'uuidv7()' do |t|
      t.text :name
      t.text :nickname

      t.citext :email, null: false
      t.text :password_digest, null: false

      t.timestamps

      t.index :email, unique: true
    end
  end
end
