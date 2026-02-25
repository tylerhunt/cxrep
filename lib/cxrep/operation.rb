require 'dry/operation'

module CXRep
  class Operation < Dry::Operation
    class << self
      def contract(&)
        return @contract if defined?(@contract)

        @contract = Class.new(CXRep::Contract, &)
      end
    end

    def initialize(contract: self.class.contract.new, **)
      self.contract = contract
      super(**)
    end

  protected

    attr_accessor :contract

  private

    INVALID = :invalid
    private_constant :INVALID

    def Invalid(*) = Failure[INVALID, *] # rubocop:disable Naming/MethodName

    def validate(**input)
      contract
        .call(input)
        .to_monad
        .fmap(&:to_h)
        .or { |failure| Invalid(failure.errors.to_h) }
    end
  end
end
