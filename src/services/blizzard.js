import axios from 'axios';

/**
 * Resgata cartas filtradas na API da Blizzard
 * @param {int} id 
 * @param {string} tipo 
 * @param {string} nome 
 * @param {string} classe 
 */
export const findCards = async (id, tipo, nome, classe) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR',
            params: {
                access_token: 'USPVcYBMkYX15FXsi9RWIFk4Q7YQSATr3x',
                class: classe || 'neutral',
                id: id,
                type: tipo,
                name: nome
            }
        });
        return response.data.cards;
    } catch (err) {
        throw Error(err);
    }
}