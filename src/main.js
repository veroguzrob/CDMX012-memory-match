//traer las funciones
import { cardsMemory, doubleCards } from './components/App.js';

//mostrar las tarjetas en la interfaz
const showCards = document.getElementById('cards');
showCards.appendChild(cardsMemory(doubleCards));


