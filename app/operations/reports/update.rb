module Reports
  class Update < ApplicationOperation
    contract do
      params do
        required(:report).filled(Types::Report)
        required(:content).filled(Types::String)
      end
    end

    def call(**input)
      output = step validate(**input)
      step update_report(**output)
    end

  private

    def update_report(report:, **attributes)
      if report.update(**attributes)
        Success(report)
      else
        Invalid(report)
      end
    end
  end
end
