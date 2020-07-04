
/**
 * Verifica se carta está de acordo com os requisitos antes de adicionar
 * @param {array} cardList 
 * @param {object} cardToAdd 
 * @param {string} classe 
 */
export const checkCards = (cardList, cardToAdd, classe) => {
    if (cardList.filter(c => c.id == cardToAdd.id).length >= 2) {
        throw Error('Não é possivel adicionar mais de duas cartas iguais');
    } else if (idToClasse(cardToAdd.classId) !== classe && idToClasse(cardToAdd.classId) !== 'any') {
        throw Error('Sua classe não é compativel com essa carta. Selecione um filtro de classe');
    } else if (cardToAdd && cardList.length >= 30) {
        throw Error('Limite de cartas atingido');
    } else {
        return ([cardToAdd, ...cardList]);
    }
}

/**
 * Converte id retornado pela API em um slug de classe
 * @param {int} id 
 */
const idToClasse = (id) => {
    switch (id) {
        case 4:
            return 'mage';
        case 3:
            return 'hunter'
        case 2:
            return 'druid'
        case 5:
            return 'paladin'
        default:
            return 'any'
    }
}

/**
 * Converte id retornado pela API em uma classe traduzida
 * @param {int} id 
 */
export const idToClassePT = (id) => {
    switch (id) {
        case 4:
            return 'Mago';
        case 3:
            return 'Caçador'
        case 2:
            return 'Druida'
        case 5:
            return 'Paladino'
        default:
            return 'Qualquer'
    }
}

/**
 * Converte id retornado pela API em um tipo traduzido
 * @param {int} id
 */
export const idToTipoPT = (id) => {
    switch (id) {
        case 5:
            return 'Magia';
        case 4:
            return 'Criatura'
        default:
            return 'Outro'
    }
}
