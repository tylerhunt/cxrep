class SessionsController < ApplicationController
  include ReturnToPath

  before_action :require_no_user, except: :destroy

  def new
    render inertia: {}
  end

  def create
    case Sessions::Authenticate.new.call(**session_params)
    in Success(user)
      self.current_user = user

      redirect_to root_path, notice: I18n.t('flash.signed_in')
    end
  end

  def destroy
    self.current_user = nil

    redirect_to root_path
  end

private

  def session_params = params.expect(session: %i[email password])
end
