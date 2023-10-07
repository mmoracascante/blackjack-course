import _ from 'underscore'



/**
 * 
 * @param {array<string>} tiposDeCarta 
 * @param {array<string>} tiposEspeciales 
 * @returns {array<string>} retorna un arreglo de string
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('TiposDeCarta es obligatorio')
    if (!tiposDeCarta.length > 0) throw new Error('TiposDeCarta tiene que ser un arreglo de string')
    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo)
        }
    }
    return _.shuffle(deck)
}