JsRoutes.setup do |config|
  # Setup your JS module system: ESM, CJS, AMD, UMD or nil.
  # config.module_type = 'ESM'

  # Follow javascript naming convention but lose the ability to match helper
  # name on backend and frontend consistently.
  config.camel_case = true

  # Generate only helpers that match specific pattern.
  # config.exclude = /^api_/
  # config.include = /^admin_/

  # Generate `*_url` helpers besides `*_path`
  # for apps that work on multiple domains.
  # config.url_links = true

  # More options:
  # @see https://github.com/railsware/js-routes#available-options
end
