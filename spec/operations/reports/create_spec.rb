require 'rails_helper'

module Reports
  RSpec.describe Create, type: :operation do
    subject(:operation) { described_class.new }

    describe '#call' do
      let(:site) { create(:site) }
      let(:content) { Faker::Lorem.sentence }

      let(:input) {
        {
          site:,
          content:,
        }
      }

      it 'creates a report' do
        expect { operation.call(**input) }
          .to change(site.reports, :count)
          .by(1)
      end

      it 'results in the report' do
        expect { |block| operation.call(**input).bind(&block) }
          .to yield_with_args(an_instance_of(Report))
      end

      context 'with empty content' do
        let(:input) { super().merge(content: '') }

        it 'fails with invalid email or password' do
          expect { |block| operation.call(**input).or(&block) }
            .to yield_with_args([
              :invalid,
              an_object_having_attributes(
                to_h: matching(
                  content: ['must be filled'],
                ),
              ),
            ])
        end
      end
    end
  end
end
