class AlbumsController < ApplicationController
    before_action :require_user!

    def new
        @band = Band.find(params[:band_id])
        @album = Album.new(band_id: params[:band_id])
        render :new
    end
    
    def create
        @album = Album.new(album_params)
        if @album.save
            redirect_to album_url(@album)
        else
            @band = @album.band
            render :new
        end
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end

    def edit
        @album = Album.find(params[:id])
        render :edit
    end

    def update
        @album = Album.find(params[:id])
        if @album.update(album_params)
            redirect_to album_url
        else
            render :edit
        end
    end

    def destroy
        @album = Album.find(params[:id])
        @album.destroy
        redirect_to bands_url
    end

    private
        def album_params
            params.require(:album).permit(:title, :year, :band_id, :studio)
        end
end