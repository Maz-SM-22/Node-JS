// Pokemon with synchronous method

const fs = require('fs'); 
const pokemon = require('pokemon'); 
const pokemonIds = fs.readFileSync('ids_pokemon.txt', options={ encoding: 'utf-8', flag: 'r' }); 

console.log(pokemonIds); 

const pokemonIdsList = pokemonIds.split('\n'); 

const getPokemonNames = (idsArray)=> {
    const pokemonNamesList = [];
    idsArray.forEach((id)=> {
        try {
            const pokemonName = pokemon.getName(id); 
            pokemonNamesList.push(pokemonName);
        } catch (err) {
            console.log(err); 
        }
    })
    return pokemonNamesList;
}

getPokemonNames(pokemonIdsList); 