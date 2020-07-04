import { atom } from 'recoil';

export const cardFilterState = atom({
    key: 'cardFilterState',
    default: {
        classe: '',
        tipo: '',
        nome: '',
        id: '',
    }
});

export const cardToAddState = atom({
    key: 'selectCardState',
    default: {}
});

export const cardToRemoveState = atom({
    key: 'cardToRemoveState',
    default: {}
});