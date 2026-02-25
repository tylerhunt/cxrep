require 'dry/types'
require 'uri'

module CXRep
  module Types
    include Dry.Types

    Email = String.constrained(format: URI::MailTo::EMAIL_REGEXP)
    URI = String.constrained(uri: :https)
  end
end
