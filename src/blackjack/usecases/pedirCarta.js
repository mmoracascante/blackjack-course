

export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        alert('No hay mas cartas en el deck')
    }
    return deck.pop()
}