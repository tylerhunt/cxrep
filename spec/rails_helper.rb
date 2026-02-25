require 'spec_helper'

ENV['RAILS_ENV'] ||= 'test'

require_relative '../config/environment'

# prevent database truncation if the environment is production
abort 'Rails is running in production mode!' if Rails.env.production?

require 'rspec/rails'

# load support files
Rails.root.glob('spec/support/**/*.rb').sort.each do |file|
  require file
end

# check for pending migrations
begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => error
  abort error.to_s.strip
end

RSpec.configure do |config|
  config.fixture_paths = [Rails.root.join('spec/fixtures')]
  config.use_transactional_fixtures = true
  config.filter_rails_from_backtrace!
end
