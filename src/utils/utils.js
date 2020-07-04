export const checkCards = (cardList, cardToAdd, classe, cardFilter) => {
    if (cardList.filter(c => c.id == cardToAdd.id).length >= 2) {
        throw Error('Não é possivel adicionar mais de duas cartas com mesma classe');
    } else if (cardFilter.classe !== classe) {
        throw Error('Sua classe não é compativel com essa carta. Selecione um filtro de classe');
    } else if (cardToAdd && cardList.length >= 30) {
        throw Error('Limite de cartas atingido');
    } else {
        return ([cardToAdd, ...cardList]);
    }
}