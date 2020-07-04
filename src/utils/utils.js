export const checkCards = (cardList, cardToAdd, classe) => {
    console.log(idToClasse(cardToAdd.classId));
    console.log((cardToAdd.classId));
    if (cardList.filter(c => c.id == cardToAdd.id).length >= 2) {
        throw Error('Não é possivel adicionar mais de duas cartas com mesma classe');
    } else if (idToClasse(cardToAdd.classId) !== classe && idToClasse(cardToAdd.classId) !== 'any') {
        throw Error('Sua classe não é compativel com essa carta. Selecione um filtro de classe');
    } else if (cardToAdd && cardList.length >= 30) {
        throw Error('Limite de cartas atingido');
    } else {
        return ([cardToAdd, ...cardList]);
    }
}

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
