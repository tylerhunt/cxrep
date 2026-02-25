require 'active_support/security_utils'

module Sessions
  class Authenticate < ApplicationOperation
    include ActiveSupport::SecurityUtils

    contract do
      params do
        required(:email).filled(Types::Email)
        required(:password).filled(Types::String)
      end
    end

    def call(**input)
      output = step validate(**input)
      user = step find_user(**output)
      step authenticate_user(user:, **output)
    end

  private

    def authenticate_user(user:, password:, **)
      if user.authenticate(password)
        Success(user)
      else
        Failure(:invalid_email_or_password)
      end
    end

    def find_user(email:, **)
      user = User.find_or_initialize_by(email:)

      Success(user)
    end
  end
end
