import React, { Suspense, useState, useEffect } from 'react';
import Carta from '../Carta';
import { useRecoilValue } from 'recoil';
import { cardSelector } from '../../atoms/selectors';
import './styles.scss';
import { useRecoilState } from 'recoil';
import { cardToAddState, cardToRemoveState, cardFilterState, classeState } from '../../atoms';
import { setLocalDeck, getLocalDeck } from '../../utils/local';
import { useComponentDidMount } from '../../utils/useComponentDidMount';
import Swal from 'sweetalert2';
import { checkCards } from '../../utils/utils';

const Deck = () => {
    const [cardToAdd,] = useRecoilState(cardToAddState);
    const [cardToRemove,] = useRecoilState(cardToRemoveState);
    const [cardFilter,] = useRecoilState(cardFilterState);
    const [classe,] = useRecoilState(classeState);
    const [cardList, setCardList] = useState([]);
    const isComponentMounted = useComponentDidMount();

    useEffect(() => {
        if (cardToAdd && isComponentMounted) {
            try {
                setCardList(checkCards(cardList, cardToAdd, classe, cardFilter));
            } catch (err) {
                Swal.fire(err.message);
            }
        }
    }, [cardToAdd]);

    useEffect(() => {
        if (cardToRemove) {
            setCardList(cardList.filter(c => c.id != cardToRemove.id));
        }
    }, [cardToRemove]);

    useEffect(() => {
        if (isComponentMounted) {
            setLocalDeck(cardList);
        }
    }, [cardList]);

    useEffect(() => {
        setCardList(getLocalDeck);
    }, []);

    return (
        <div className="lista-container">
            <div className="lista">
                {cardList && cardList.length > 0 ? cardList.map((carta, index) => {
                    return <Carta key={index} carta={carta} isDeck={true} />
                }) : null}
            </div>
        </div>
    )
}

export default Deck;