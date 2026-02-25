class CreateMemberships < ActiveRecord::Migration[8.1]
  def change
    create_table :memberships, id: :uuid, default: 'uuidv7()' do |t|
      t.references :site, null: false, type: :uuid, foreign_key: true
      t.references :user, null: false, type: :uuid, foreign_key: true

      t.timestamps

      t.index %w[site_id user_id], unique: true
    end
  end
end
