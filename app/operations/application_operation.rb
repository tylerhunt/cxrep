class ApplicationOperation < CXRep::Operation
  module Types
    include CXRep::Types

    # models
    Site = Instance(Site)
    Report = Instance(Report)
    User = Instance(User)
  end
end
