//traer la data para juego
import cards from '../data/pokemon/pokemon.js'

//obtener la data en un arreglo
const allData = Object.values(cards.items);

/*//crear las tarjetas 1a version
export const cardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
  pokemons.forEach(pokemon => {
    const pokeCard = document.createElement('figure');
    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.image
    pokeCard.className = 'hidden';
    const pokebolaCard = document.createElement('figure');
    const pokebolaImg = document.createElement('img');
    pokebolaImg.src = "img/card1.png"
    pokemonCards.appendChild(pokeCard)
    pokemonCards.appendChild(pokebolaCard)
    pokeCard.appendChild(pokeImg)
    pokebolaCard.appendChild(pokebolaImg)
  });
  return pokemonCards;
};*/
//crear las tarjetas 2a version
export const cardsMemory = (pokemons) => {
  const pokemonCards = document.createElement('div');
  pokemons.forEach((pokemon, index) => {
    const pokeCard = document.createElement('figure');
    pokeCard.setAttribute('id', pokemon.id+index);//como pa que fue?
    pokeCard.addEventListener('click', prueba)
    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.image;
    pokeImg.setAttribute('data-pokeImg', index )
    pokeImg.classList.add('hidden');
    const pokebolaImg = document.createElement('img');
    pokebolaImg.src = "img/card1.png";
    pokebolaImg.setAttribute('data-pokebola', index);
    pokebolaImg.classList.add('show');
    pokemonCards.appendChild(pokeCard);
    pokeCard.appendChild(pokeImg);
    pokeCard.appendChild(pokebolaImg);
  });
  return pokemonCards;
};

//duplicar data
const allCards1 = allData
const allCards2 = allData
export const doubleCards = allCards1.concat(allCards2)

//obtener el random de las tarjetas
doubleCards.sort(() => { return Math.random() - 0.5 }); /*Math.random() nos devuelve un número aleatorio entre 0 y 1, al restar 0.5 hacemos que genere números negativos y positivos para que la función sort() nos re-ordene el arreglo de forma aleatoria colocando un elemento delante otro detrás.*/

//función para intercambiar clases
function prueba(e) {
  let pokebolaIndex = e.target.getAttribute("data-pokebola"); // 0
  console.log(pokebolaIndex);
  let pokemonAmostrar = document.querySelector(`img[data-pokeImg]`)

  e.target.classList.toggle('hidden');
  pokemonAmostrar.classList.toggle('hidden')
  //e.target.nextSibling.classList.toggle('show')
  
}