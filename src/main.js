//traer las funciones
import { /*frontCardsMemory,*/ backCardsMemory, doubleCards } from './components/App.js';

/*//mostrar el front de las tarjetas en la interfaz
const showFrontCards = document.getElementById('front');
    showFrontCards.appendChild(frontCardsMemory());*/

//mostrar el back de las tarjetas en la interfaz
const showBackCards = document.getElementById('card');
    showBackCards.appendChild(backCardsMemory(doubleCards));
    
