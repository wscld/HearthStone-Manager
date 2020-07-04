import React, { Suspense } from 'react';
import Filter from '../../components/Filter';
import { findCards } from '../../services/blizzard';
import { useRecoilState } from 'recoil';
import {cardFilterState} from '../../atoms';
import { useRecoilValue } from 'recoil';
import cardSelector from '../../atoms/selectors';
import Carta from '../../components/Carta';
import Lista from '../../components/Lista';
import Deck from '../../components/Deck';

const Home = () => {
    const [, setCardFilter] = useRecoilState(cardFilterState);

    const filterCallback = (classe, tipo, nome, id) => {
        setCardFilter({ classe, tipo, nome, id });
    }

    return (
        <>
            <Filter filterCallback={filterCallback} />
            <Suspense fallback={<p>loading</p>}>
                <Lista />
            </Suspense>
            <Deck/>
        </>
    )
}

export default Home;