//traer las funciones
import { cardsMemory, doubleCards } from './components/App.js';

//mostrar las tarjetas en la interfaz
const showCards = document.getElementById('cards');
showCards.appendChild(cardsMemory(doubleCards));

/*//Manejando las estadisticas
const movements = document.getElementById('movimientos');
    movements.addEventListener('click', );

const showHits = document.getElementById('aciertos');
    showHits.addEventListener('click', );
    

const timeRest = document.getElementById('t-restante');
    timeRest.addEventListener('click', );*/
