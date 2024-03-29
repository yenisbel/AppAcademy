class ApplicationController < ActionController::Base
    helper_method :current_user, :current_user_id, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def current_user_id
        return current_user.id if current_user
        nil
    end
    
    def logged_in?
        !!current_user
    end

    def log_in_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def require_user!
        redirect_to new_session_url if current_user.nil?
    end

end
