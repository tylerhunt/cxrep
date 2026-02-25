class HomeController < ApplicationController
  def index
    redirect_to sites_path and return if current_user

    render inertia: {}
  end
end
