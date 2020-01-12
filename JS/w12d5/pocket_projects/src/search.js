const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150'
const searchInput = document.querySelector('.search')
const searchUl = document.querySelector('.suggestions')

let pokemonList = []

fetch(pokemonAPI)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        pokemonList = myJson.results;
    });

// displayMatches
function findMatches(word){

    pokemonList.find( (pokemon) => {
        const re = new RegExp(word);
        const found = pokemon.name.match(re)
    });
    return found
    // const regex = /[A-Z]/g;
    // const regex = /[word]/g;
    // pokemonList.find(word)
}


//*
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let regexp = /[A-E]/gi;
let matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']