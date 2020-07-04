/**
 * Salva array de cartas no localstorage
 * @param {array} cartas 
 */
export const setLocalDeck = (cartas) => {
    localStorage.setItem('cartas', JSON.stringify(cartas));
}

/**
 * Resgata array de cartas no localstorage
 * 
 */
export const getLocalDeck = () => {
    return JSON.parse(localStorage.getItem('cartas'));
}

/**
 * Salva classe do usuario no localstorage
 * @param {string} cartas
 */
export const setLocalClasse = (classe) => {
    localStorage.setItem('classe', classe);
}

/**
 * Resgata classe do usuario no localstorage
 * 
 */
export const getLocalClasse = () => {
    return localStorage.getItem('classe');
}