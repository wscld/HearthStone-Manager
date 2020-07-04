import React from 'react';
import './styles.scss';
import { useRecoilState } from 'recoil';
import { cardToAddState, cardToRemoveState } from '../../atoms';

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
                    <div className="id">{carta.id}</div>
                    <div className="descricao" dangerouslySetInnerHTML={{ __html: carta.text }}></div>
                    <div className="ataque">{carta.attack}</div>
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