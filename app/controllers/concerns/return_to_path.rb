module ReturnToPath
  extend ActiveSupport::Concern

  RETURN_TO_SESSION_KEY = :return_to
  private_constant :RETURN_TO_SESSION_KEY

protected

  def return_to_path
    session[RETURN_TO_SESSION_KEY]
  end

  def return_to_stored_path(status: :found, **)
    redirect_to(session[RETURN_TO_SESSION_KEY] || root_path, status:, **)

    session[RETURN_TO_SESSION_KEY] = nil
  end

  def store_return_to_path
    session[RETURN_TO_SESSION_KEY] = request.fullpath
  end
end
