@pokemon.each do |poke|
    json.set! poke.id do
      json.extract! poke, :id, :name
      json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
    #   json.image_url asset_path(`/pokedex/app/assets/images/${poke.image_url}`)
    #   /pokedex/app/assets/images/pokemon_snaps
    end
end