//traer las funciones
import {backCardsMemory, doubleCards,} from './components/App.js';

//mostrar el front de las tarjetas en la interfaz


//mostrar el back de las tarjetas en la interfaz
const showCards = document.getElementById('back');
    showCards.appendChild(backCardsMemory(doubleCards));

/*//mezclar las cartas en cada partida
const btnPlay = document.getElementById('play');
    btnPlay.addEventListener('click', () =>{
        doubleCards.innerHTML = '';
        showCards.appendChild(backCardsMemory(randomCards))
    });*/