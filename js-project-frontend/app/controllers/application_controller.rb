class ApplicationController < ActionController::API
  include ActionController::Helpers
  helper_method :current_user

    def current_user
        User.find_by(id: session[:user_id])
      end

end
