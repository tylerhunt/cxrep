module Sites
  class Create < ApplicationOperation
    contract do
      params do
        required(:name).filled(Types::String)
        required(:url).filled(Types::URI)
        required(:user).filled(Types::User)
      end
    end

    def call(**input)
      output = step validate(**input)
      step create_site(**output)
    end

  private

    def create_site(user:, **attributes)
      site = user.sites.create(**attributes)

      if site.persisted?
        Success(site)
      else
        Invalid(site)
      end
    end
  end
end
