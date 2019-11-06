class CommentsController < ApplicationController
    def index
        if params[:user_id]
            commented = Comment.find(params[:user_id])
        elsif params[:artwork_id]
            commented = Comment.find(params[:artwork_id])
        else
            commented = Comment.all
        end
        render json: commented
    end
    
    def create
        commented = Comment.new(comment_params)
        if commented.save
            render json: commented
        else
            render json: commented.errors.full_messages
        end

    end

    def destroy
        commented = Comment.find(params[:id])
        commented.destroy
        render json: commented

    end

    private
        def comments_params
            params.require(:comment).permit(:body, :artwork_id, :user_id)
        end
end