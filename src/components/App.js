//traer la data para juego
import cards from '../data/pokemon/pokemon.js'

//obtener la data
const allData = Object.values(cards.items);

//crear las tarjetas 2a version
export const cardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
  pokemons.forEach((pokemon, index) => {
    const pokeCard = document.createElement('figure');
    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.image;
    pokemonImg.id = 'pokemon' + index;
    pokemonImg.classList.toggle('hidden');
    const pokebolaImg = document.createElement('img');
    pokebolaImg.src = "img/card1.png";
    pokebolaImg.id = 'bola' + index;
    pokebolaImg.addEventListener('click', () => {
      pokemonImg.classList.toggle('hidden');
      pokebolaImg.classList.toggle('hidden');
      pokemonsMatch.push(pokemon.id);
      pokeId.push('pokemon' + index);
      bolaId.push('bola' + index);
      comparacionId(pokemonsMatch, pokeId, bolaId);
    })
    pokemonCards.appendChild(pokeCard);
    pokeCard.appendChild(pokemonImg);
    pokeCard.appendChild(pokebolaImg);
  });
  return pokemonCards;
};

//duplicar la data
const allCards1 = allData
const allCards2 = allData
export const doubleCards = allCards1.concat(allCards2)

//obtener el random de las tarjetas
doubleCards.sort(() => { return Math.random() - 0.5 });
console.table(doubleCards)

//hacer match
let pokemonsMatch = []
let pokeId = []
let bolaId = []
const comparacionId = (pokemons, ids, pokeBolas) => {
  //console.log(pokemons, ids, pokeBolas);

  if (pokemons.length == 2) {
    const firstCard = document.getElementById(ids[0]);
    console.log(firstCard);
    const secondCard = document.getElementById(ids[1]);
    console.log(secondCard);
    const bola1 = document.getElementById(pokeBolas[0])
    console.log(bola1);
    const bola2 = document.getElementById(pokeBolas[1])
    console.log(bola2);

    if (pokemons[0] == pokemons[1]) {
      console.log('los pokemones son iguales');
      //aqui va el contador de aciertos

    } else {
      firstCard.classList.toggle('hidden');
      secondCard.classList.toggle('hidden');
      bola1.classList.toggle('hidden');
      bola2.classList.toggle('hidden');
      //debo agregar un set Time Out
      console.log('los pokemones NO son iguales');

    }
    pokemonsMatch = []
    pokeId = []
    bolaId = []
    //qui va el contador de movimientos
  }
}









