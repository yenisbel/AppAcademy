class UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(params[:id])
        render :show
    end

    def create
        @user = User.new(user_info)
        if @user.save!
            redirect_to(user_url(@user))
        else
            render :new
        end
    end

    def user_info
        params.require(:user).permit(:username, :password)
    end

end