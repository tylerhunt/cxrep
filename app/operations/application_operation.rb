class ApplicationOperation < CXRep::Operation
  module Types
    include CXRep::Types

    # models
    Site = Instance(Site)
    Report = Instance(Report)
  end
end
