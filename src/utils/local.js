export const setLocalDeck = (cartas) => {
    localStorage.setItem('cartas', JSON.stringify(cartas));
}

export const getLocalDeck = () => {
    return JSON.parse(localStorage.getItem('cartas'));
}

export const setLocalClasse = (classe) => {
    localStorage.setItem('classe', classe);
}

export const getLocalClasse = () => {
    return localStorage.getItem('classe');
}