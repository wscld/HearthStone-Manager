import React from 'react';
import Carta from '../Carta';
import { useRecoilValue } from 'recoil';
import { cardSelector } from '../../atoms/selectors';
import './styles.scss';

const Lista = () => {
    const cardList = useRecoilValue(cardSelector);

    return (
        <div className="lista-container">
            <div className="lista">
                {cardList && cardList.length ? cardList.map((carta, index) => {
                    return <Carta key={index} carta={carta} isDeck={false} />
                }) : null}
            </div>
        </div>
    )
}

export default Lista;