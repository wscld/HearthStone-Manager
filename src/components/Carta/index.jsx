import React from 'react';
import './styles.scss';
import { useRecoilState } from 'recoil';
import { cardToAddState, cardToRemoveState } from '../../atoms';
import { idToClassePT } from '../../utils/utils';

const Carta = ({ carta, isDeck }) => {
    const [, setCardToAdd] = useRecoilState(cardToAddState);
    const [, setCardToRemove] = useRecoilState(cardToRemoveState);



    return (
        <div className="carta-container">
            <div className="carta">
                <div className="image">
                    <img src={carta.image} />
                </div>
                <div className="content">
                    <div className="nome">{carta.name}</div>
                    <div className="id">id: {carta.id}</div>
                    <div className="id">{idToClassePT(carta.classId)}</div>
                    <div className="ataque">Ataque: {carta.attack ? carta.attack : 0}</div>
                    <div className="descricao" dangerouslySetInnerHTML={{ __html: carta.text }}></div>
                </div>
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