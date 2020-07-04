import React from 'react';
import './styles.scss';
import blank from '../../assets/blank.png';
import { useRecoilState } from 'recoil';
import { cardToAddState, cardToRemoveState } from '../../atoms';
import { idToClassePT, idToTipoPT } from '../../utils/utils';

const Carta = ({ carta, isDeck }) => {
    const [, setCardToAdd] = useRecoilState(cardToAddState);
    const [, setCardToRemove] = useRecoilState(cardToRemoveState);



    return (
        <div className="carta-container">
            <div className="carta">
                <div className="image">
                    <img src={carta.image ? carta.image : blank} />
                </div>
                <div className="content">
                    <div className="nome">{carta.name}</div>
                    <div className="descricao" dangerouslySetInnerHTML={{ __html: carta.text?carta.text:'Sem descrição' }}></div>
                </div>
                <div className="extra">id: {carta.id}</div>
                <div className="extra">Classe: {idToClassePT(carta.classId)}</div>
                <div className="extra">Tipo: {idToTipoPT(carta.cardTypeId)}</div>
                <div className="ataque">Ataque: {carta.attack ? carta.attack : 0}</div>
                <div className="defesa">Defesa: {carta.attack ? carta.health : 0}</div>
                {isDeck ?
                    <>
                        <div className="button-negative" onClick={() => setCardToRemove(carta)}>Remover</div>
                    </>
                    :
                    <>
                        <div className="button-positive" onClick={() => setCardToAdd(carta)}>Adicionar</div>
                    </>
                }
            </div>
        </div>
    )
}

export default Carta;