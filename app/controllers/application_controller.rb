require 'dry/monads'

class ApplicationController < ActionController::Base
  include Dry::Monads[:result]
  include CurrentUser

  # Only allow modern browsers supporting webp images, web push, badges, import
  # maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  inertia_share newSessionPath: -> { new_session_path }
  inertia_share sessionPath: -> { session_path }
  inertia_share currentUser: -> { current_user&.as_json(only: :email) }
end
