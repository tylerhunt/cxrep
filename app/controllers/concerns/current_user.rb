require 'active_support/concern'

module CurrentUser
  extend ActiveSupport::Concern
  include ReturnToPath

protected

  USER_COOKIE = :current_user
  private_constant :USER_COOKIE

  def current_user
    Current.user ||=
      case cookies.encrypted[USER_COOKIE]
      in String => user_id
        User.find_by(id: user_id)
      else
        cookies.delete USER_COOKIE
        nil
      end
  end

  def current_user=(user)
    if user
      cookies.encrypted.permanent[USER_COOKIE] = {
        value: user.id,
        httponly: true,
      }
    else
      cookies.delete USER_COOKIE
    end

    Current.user = user
  end

  def require_user
    store_return_to_path and redirect_to new_session_path unless current_user
  end

  def require_no_user
    redirect_to home_path if current_user
  end
end
