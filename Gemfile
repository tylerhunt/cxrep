source 'https://rubygems.org'

gem 'rails', '~> 8.1.2'

gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', require: false
gem 'dry-monads', '~> 1.9'
gem 'dry-operation', '~> 1.1'
gem 'dry-types', '~> 1.9'
gem 'dry-validation', '~> 1.11'
gem 'image_processing', '~> 1.2'
gem 'pg', '~> 1.1'
gem 'puma', '>= 5.0'

# engines/plugins
gem 'inertia_rails', '~> 3.17'
gem 'js-routes', '~> 2.3'
gem 'propshaft'
gem 'solid_cache'
gem 'solid_queue'
gem 'vite_rails', '~> 3.0'

group :development do
  gem 'rubocop', '~> 1.84', require: false
  gem 'rubocop-rails', '~> 2.34', require: false
  gem 'rubocop-rake', '~> 0.7.1', require: false
  gem 'rubocop-rspec', '~> 3.9', require: false
  gem 'web-console'
end

group :development, :test do
  gem 'brakeman', require: false
  gem 'bundler-audit', require: false
  gem 'rspec-rails', '~> 8.0'
end

group :test do
  gem 'factory_bot_rails', '~> 6.5'
  gem 'faker', '~> 3.6'
end
