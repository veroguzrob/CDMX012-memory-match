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

//variables para la funcion
let pokemonsMatch = []
let pokeId = []
let bolaId = []
let movements = 0;
let hits = 0;
let timer = false;
let time = 60;
let countdownTime = null;

//manejo de las estadisticas
const showMovements = document.getElementById('movimientos');
const showHits = document.getElementById('aciertos');
const timeRest = document.getElementById('tiempo');

//funcion que nos permita hacer match
const comparacionId = (pokemons, ids, pokeBolas) => {
  //aqui ponemos el temporizador
  if (timer == false) {
    countTime();
    timer = true;
  }

  if (pokemons.length == 2) {
    const firstCard = document.getElementById(ids[0]);
    const secondCard = document.getElementById(ids[1]);
    const ball1 = document.getElementById(pokeBolas[0])
    const ball2 = document.getElementById(pokeBolas[1])

    if (pokemons[0] == pokemons[1]) {
      //aqui va el contador de aciertos
      hits++;
      showHits.innerHTML = `Aciertos: <br>${hits}`;

      
      if (hits == 9) {
        clearInterval(countdownTime);
        showHits.innerHTML = `Aciertos: <br>${hits} "GANASTE"`;
        timeRest.innerHTML = `Fantastico!! Solo te demoraste <br>${time - timer} segundos`;
        showMovements.innerHTML = `Movimientos: ${movements} "Eres lo Maximo!!"`;
      }

    } else {
      setTimeout(() => {
        firstCard.classList.toggle('hidden');
        secondCard.classList.toggle('hidden');
        ball1.classList.toggle('hidden');
        ball2.classList.toggle('hidden');
      }, 800);

    }
    pokemonsMatch = []
    pokeId = []
    bolaId = []

    //aqui va el contador de movimientos
    movements++;
    showMovements.innerHTML = `Movimientos: <br>${movements}`;
  }
}

//funcion para el temporizador
function countTime() {
  countdownTime = setInterval(() => {
    time--;
    timeRest.innerHTML = `Tiempo: <br>${time} segundos`;
    if (timer == 0) {
      clearInterval(countdownTime);
    }
  }, 1000)
}
