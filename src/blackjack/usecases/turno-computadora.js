import { pedirCarta } from "./pedirCarta";
import { acumPuntos } from "./acum-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";


export const turnoComputadora = (puntosMinimos, deck = [], puntosJugadores, small, divCartas) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesario')

    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck)
        puntosComputadora = acumPuntos(carta, puntosJugadores.length - 1, small, puntosJugadores)
        crearCarta(carta, puntosJugadores.length - 1, divCartas)



    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores)



}