import axios from 'axios';

export const findCards = async (id, tipo, nome, classe) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR',
            params: {
                access_token: 'USCQo2z5wpRth4yGbHdpu2K0wtIEAS7DCI',
                class: classe,
                id: id,
                tipo: tipo,
                nome:nome
            }
        });
        return response.data.cards;
    } catch (err) {
        throw Error(err);
    }
}