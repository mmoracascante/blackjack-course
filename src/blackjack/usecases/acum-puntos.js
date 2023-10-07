import { valorCarta } from "./valor-carta"

export const acumPuntos = (carta, turno, small, puntosJugadores) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
    small[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
}