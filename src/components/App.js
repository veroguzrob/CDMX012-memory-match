//traer la data para juego
import cards from '../data/pokemon/pokemon.js'

//crear las tarjetas 1a version
export const backCardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
  pokemons.forEach(pokemon => {
    const pokeCard = document.createElement('figure')
    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.image
    const pokebolaCard = document.createElement('figure')
    const pokebolaImg = document.createElement('img');
    pokebolaImg.src = "img/card1.png"
    pokemonCards.appendChild(pokeCard)
    pokemonCards.appendChild(pokebolaCard)
    pokeCard.appendChild(pokeImg)
    pokebolaCard.appendChild(pokebolaImg)
  });
  return pokemonCards;
};
/*//crear las tarjetas 2a version
export const backCardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
  pokemons.forEach(pokemon => {
    const pokeCard = document.createElement('figure')
    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.image
    const pokebolaImg = document.createElement('img');
    pokebolaImg.src = "img/card1.png"
    pokemonCards.appendChild(pokeCard)
    pokeCard.appendChild(pokeImg)
    pokeCard.appendChild(pokebolaImg)
  });
  return pokemonCards;
};*/

//obtener la data en un arreglo
const allData = Object.values(cards.items);

//duplicar data
const allCards1 = allData
const allCards2 = allData
export const doubleCards = allCards1.concat(allCards2)

//obtener el random de las tarjetas
doubleCards.sort(() => { return Math.random() - 0.5 }); /*Math.random() nos devuelve un número aleatorio entre 0 y 1, al restar 0.5 hacemos que genere números negativos y positivos para que la función sort() nos re-ordene el arreglo de forma aleatoria colocando un elemento delante otro detrás.*/



