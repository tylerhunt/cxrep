class HomeController < ApplicationController
  def index
    redirect_to current_user.sites.first and return if current_user

    render inertia: {}
  end
end
