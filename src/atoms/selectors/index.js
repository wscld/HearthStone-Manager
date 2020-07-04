import { findCards } from "../../services/blizzard";
import { selector } from 'recoil';
import { cardFilterState } from '../index';

export const cardSelector = selector({
    key: 'cardSelector',
    get: async ({ get }) => {
        const cardFilter = get(cardFilterState);
        try {
            return await findCards(cardFilter.id, cardFilter.tipo, cardFilter.nome, cardFilter.classe);
        } catch (err) {
            console.log(err);
        }

    }
});