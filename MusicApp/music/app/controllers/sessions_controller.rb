class SessionsController < ApplicationController
    
    def new
        render :new
    end

    def create
        user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if user.nil?
            render :new
        else
            log_in_user!(user)
            redirect_to bands_url
        end
    end

    def destroy
        current_user.reset_session_token! 
        session[:session_token] = nil
        redirect_to new_session_url
    end
end