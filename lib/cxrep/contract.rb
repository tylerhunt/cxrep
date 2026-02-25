require 'dry/validation'

Dry::Validation.load_extensions :monads

module CXRep
  class Contract < Dry::Validation::Contract
    config.messages.backend = :i18n
  end
end
