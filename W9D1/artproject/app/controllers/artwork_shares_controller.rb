class ArtworkSharesController < ApplicationController
    def create
        artwork_shared = ArtworkShare.new(artwork_shares_params)
        if artwork_shared.save
            render json: artwork_shared
        else
            render json: share.errors.full_messages
        end

    end

    def destroy
        artwork_shared = ArtworkShare.find(params[:id])
        artwork_shared.destroy
        render json: artwork_shared

    end

    private
        def artwork_shares_params
            params.require(:artwork_share).permit(:artwork_id, :viewer_id)
        end
end