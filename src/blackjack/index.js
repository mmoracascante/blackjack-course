import _ from 'underscore'
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumPuntos, crearCarta } from './usecases'

const miModulo = (() => {
    'use strict'

    let deck = []
    const tipos = ['C', 'D', 'H', 'S']
    const especiales = ['A', 'J', 'Q', 'K']

    let puntosJugador = 0
    let puntosComputadora = 0

    let puntosJugadores = []

    const btnPedir = document.querySelector('#btnPedir')
    const btnStop = document.querySelector('#btnStop')
    const btnNew = document.querySelector('#btnNew')

    const small = document.querySelectorAll('small')

    const cartaJugador = document.querySelector('#jugador-cartas')
    const cartaComputadora = document.querySelector('#computadora-cartas')

    const divCartas = document.querySelectorAll('.divCartas')

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales)
        puntosJugadores = []
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)

        }
        small.forEach(item => item.innerText = 0)
        divCartas.forEach(item => item.innerHTML = '')

        btnPedir.disabled = false
        btnStop.disabled = false
    }


    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck)
        const puntosJugador = acumPuntos(carta, 0, small, puntosJugadores)

        crearCarta(carta, 0, divCartas)


        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste')
            btnPedir.disabled = true
            btnStop.disabled = true
            turnoComputadora(puntosJugador, deck, puntosJugadores, small, divCartas)
        } else if (puntosJugador === 21) {
            console.log('21, genial')
            btnPedir.disabled = true
            btnStop.disabled = true
            turnoComputadora(puntosJugador, deck, puntosJugadores, small, divCartas)
        }

    })

    btnStop.addEventListener('click', () => {
        btnPedir.disabled = true
        btnStop.disabled = true
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, small, divCartas)
    })

    btnNew.addEventListener('click', () => {
        inicializarJuego()
    })

    return {
        nuevoJuego: inicializarJuego
    }

})()





