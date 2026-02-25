class CreateReports < ActiveRecord::Migration[8.1]
  def change
    create_table :reports, id: :uuid, default: 'uuidv7()' do |t|
      t.references :site, null: false, type: :uuid, foreign_key: true

      t.text :content
      t.text :emoji

      t.timestamps
    end
  end
end
