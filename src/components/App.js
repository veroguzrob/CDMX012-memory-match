//traer la data para juego
import cards from '../data/pokemon/pokemon.js'

//obtener la data en un arreglo
const allData = Object.values(cards.items);

//duplicar data
const allCards1 = allData
const allCards2 = allData
export const doubleCards = allCards1.concat(allCards2)

//Crear un aleatorio para la data


//crear en front de las tarjetas


//crear el back de las tarjetas
export const backCardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
    pokemons.forEach(pokemon => {
      const pokeCard = document.createElement('figure')
      const pokeImg = document.createElement('img');
        pokeImg.src = pokemon.image
        pokemonCards.appendChild(pokeCard)
        pokeCard.appendChild(pokeImg)
    });
    
  return pokemonCards; 
};



