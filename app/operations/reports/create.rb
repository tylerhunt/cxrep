module Reports
  class Create < ApplicationOperation
    contract do
      params do
        required(:site).filled(Types::Site)
        required(:content).filled(Types::String)
      end
    end

    def call(**input)
      output = step validate(**input)
      step create_report(**output)
    end

  private

    def create_report(site:, **attributes)
      report = site.reports.create(**attributes)

      if report.persisted?
        Success(report)
      else
        Invalid(report)
      end
    end
  end
end
