require 'rails_helper'

module Sessions
  RSpec.describe Authenticate, type: :operation do
    subject(:operation) { described_class.new }

    describe '#call' do
      let(:user) { create(:user) }

      let(:input) {
        {
          email: user.email,
          password: user.password,
        }
      }

      it 'results in the user' do
        expect { |block| operation.call(**input).bind(&block) }
          .to yield_with_args(user)
      end

      context 'with an invalid password' do
        let(:input) { super().merge(password: 'invalid') }

        it 'fails with invalid email or password' do
          expect { |block| operation.call(**input).or(&block) }
            .to yield_with_args(:invalid_email_or_password)
        end
      end
    end
  end
end
