class CreateSites < ActiveRecord::Migration[8.1]
  def change
    create_table :sites, id: :uuid, default: 'uuidv7()' do |t|
      t.text :name, null: false
      t.text :url, null: false

      t.timestamps
    end
  end
end
