class SitesController < ApplicationController
  before_action :require_user

  def index
    sites = Current.user.sites

    render inertia: {
      sites: sites.as_json(only: %i[id name url]),
    }
  end

  def show
    site = Current.user.sites.find(params[:id])

    render inertia: { site: site.as_json(only: %i[id name]) }
  end

  def new
    render inertia: {}
  end

  def create
    case Sites::Create.new.call(user: Current.user, **site_params)
    in Success(site)
      redirect_to site_path(site)
    in Failure[:invalid, errors]
      redirect_to new_site_path, inertia: { errors: }
    end
  end

private

  def site_params = params.permit(:name, :url)
end
