require_relative 'boot'

require 'rails'

# frameworks
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'active_storage/engine'
require 'action_text/engine'

# engines/plugins
require 'inertia_rails'
require 'js_routes'
require 'propshaft'
require 'solid_cache'
require 'solid_queue'
require 'vite_rails'

# development
require 'web-console' if Rails.env.development?
require 'rspec-rails' if Rails.env.development? # generators/mailer previews

module CXRep
  class Application < Rails::Application
    # initialize configuration defaults for originally generated Rails version
    config.load_defaults 8.1

    # ignore `lib` subdirectories that should not be reloaded or eager loaded
    config.autoload_lib(ignore: %w[assets tasks])

    # configure generators
    config.generators do |generate|
      # hooks
      generate.orm :active_record, primary_key_type: :uuid
      generate.orm :cxrep
      generate.system_tests :rspec

      # options
      generate.helper false
      generate.request_specs false
      generate.view_specs false

      generate.fallbacks[:cxrep] = :active_record
    end
  end
end
