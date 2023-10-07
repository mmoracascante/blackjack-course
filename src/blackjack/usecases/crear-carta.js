

export const crearCarta = (carta, turno, divCartas) => {
    const img = document.createElement('img')

    img.src = `assets/cartas/${carta}.png`
    img.classList.add('carta')
    divCartas[turno].append(img)
}