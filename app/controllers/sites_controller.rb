class SitesController < ApplicationController
  before_action :require_user

  def show
    site = Current.user.sites.find(params[:id])

    render inertia: {
      site: site.as_json(only: :name),
      reportsPath: site_reports_path(site),
    }
  end
end
