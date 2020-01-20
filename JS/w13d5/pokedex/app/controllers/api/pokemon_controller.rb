class Api::PokemonController < ApplicationController
    # index, show, create
    def index
        @pokemon = Pokemon.all
        render :index
    end

    def show
        @pokemon = Pokemon.find(params[:id])
        if @pokemon
            render :show 
        else
            render json: @pokemon.errors.full_messages
        end 
    end

    def create
        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save
            render :show 
        else
            render json: @pokemon.errors.full_messages
        end 

    end
    

    private
    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves)
    end


    
end