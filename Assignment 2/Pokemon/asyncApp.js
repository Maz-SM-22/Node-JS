// Pokemon with asynchronous method

const fs = require('fs'); 
const pokemon = require('pokemon'); 
fs.readFile('ids_pokemon.txt', 'utf-8', (err, data)=> {
    try {
        const pokemonIds = data; 
        const pokemonIdsList = pokemonIds.split('\n'); 
        console.log(getPokemonNames(pokemonIdsList)); 
    } catch {
        console.log(err); 
    }
})

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