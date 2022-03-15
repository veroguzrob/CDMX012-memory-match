//traer la data para juego
import cards from '../data/pokemon/pokemon.js'

//obtener la data en un arreglo
const allData = Object.values(cards.items);


//duplicar data
const array1 = allData
const array2 = allData
export const doubleCards = array1.concat(array2)

//crear las tarjetas de memory
export const cardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
    pokemons.forEach(pokemon => {
      const pokeCard = document.createElement('figure')
      const pokeImg = document.createElement('img');
        pokeImg.src = pokemon.image
      const pokeName = document.createElement('figcaption');
        pokeName.textContent = pokemon.id
        pokemonCards.appendChild(pokeCard)
        pokeCard.appendChild(pokeImg)
        pokeCard.appendChild(pokeName)

    });
    
  return pokemonCards; 
};

