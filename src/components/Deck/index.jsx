import React, { Suspense, useState, useEffect } from 'react';
import Carta from '../Carta';
import { useRecoilValue } from 'recoil';
import { cardSelector } from '../../atoms/selectors';
import './styles.scss';
import { useRecoilState } from 'recoil';
import { cardToAddState, cardToRemoveState } from '../../atoms';

const Deck = () => {
    const [cardToAdd,] = useRecoilState(cardToAddState);
    const [cardToRemove,] = useRecoilState(cardToRemoveState);
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        if (cardToAdd) {
            setCardList([cardToAdd, ...cardList]);
        }
    }, [cardToAdd]);

    useEffect(() => {
        if (cardToRemove) {
            setCardList(cardList.filter(c => c.id != cardToRemove.id));
        }
    }, [cardToRemove]);

    return (
        <div className="lista-container">
            <div className="lista">
                {cardList.length>0? cardList.map((carta, index) => {
                    return <Carta carta={carta} isDeck={true} />
                }):null}
            </div>
        </div>
    )
}

export default Deck;