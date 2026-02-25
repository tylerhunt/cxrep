# This migration comes from active_storage (originally 20170806125915)
class CreateActiveStorageTables < ActiveRecord::Migration[8.1]
  def change
    create_table :active_storage_blobs, id: :uuid, default: 'uuidv7()' do |t|
      t.text :key, null: false
      t.text :filename, null: false
      t.text :content_type
      t.text :metadata
      t.text :service_name, null: false
      t.bigint :byte_size, null: false
      t.text :checksum

      if connection.supports_datetime_with_precision?
        t.datetime :created_at, precision: 6, null: false
      else
        t.datetime :created_at, null: false
      end

      t.index %i[key], unique: true
    end

    create_table :active_storage_attachments,
      id: :uuid,
      default: 'uuidv7()' do |t|
      t.text :name, null: false
      t.references :record,
        null: false,
        polymorphic: true,
        index: false,
        type: :uuid
      t.references :blob, null: false, type: :uuid

      if connection.supports_datetime_with_precision?
        t.datetime :created_at, precision: 6, null: false
      else
        t.datetime :created_at, null: false
      end

      t.index %i[record_type record_id name blob_id],
        name: :index_active_storage_attachments_uniqueness, unique: true
      t.foreign_key :active_storage_blobs, column: :blob_id
    end

    create_table :active_storage_variant_records,
      id: :uuid,
      default: 'uuidv7()' do |t|
      t.belongs_to :blob, null: false, index: false, type: :uuid
      t.text :variation_digest, null: false

      t.index %i[blob_id variation_digest],
        name: :index_active_storage_variant_records_uniqueness, unique: true
      t.foreign_key :active_storage_blobs, column: :blob_id
    end
  end
end
