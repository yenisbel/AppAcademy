# Write methods on the UsersController to allow new users to sign up.
# Users should be logged in immediately after they sign up.

class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            redirect_to new_session_url
        else
            render :new
        end
    end

    def show
        render :show
    end

    private
        def user_params
            params.require(:user).permit(:email, :password)
        end

end