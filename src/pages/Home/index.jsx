import React, { Suspense, useEffect } from 'react';
import Filter from '../../components/Filter';
import { useRecoilState } from 'recoil';
import { cardFilterState, classeState } from '../../atoms';
import Lista from '../../components/Lista';
import Deck from '../../components/Deck';
import './styles.scss';
import { getLocalClasse } from '../../utils/local';

const Home = () => {
    const [cardFilter, setCardFilter] = useRecoilState(cardFilterState);
    const [classe, setClasse] = useRecoilState(classeState);

    useEffect(() => {
        const localClasse = getLocalClasse();
        if (localClasse) {
            setClasse(localClasse);
        }
    }, []);

    const filterCallback = (classe, tipo, nome, id) => {
        setCardFilter({ classe, tipo, nome, id });
    }

    return (
        <div className="home-container">
            <Filter filterCallback={filterCallback} />
            <div className="title">Cartas Disponiveis</div>
            <div className="tip">Utilize o scroll horizontal para navegar</div>
            <Suspense fallback={<p>loading</p>}>
                <Lista />
            </Suspense>
            <div className="title">Meu Deck - {classe}</div>
            <div className="tip">Utilize o scroll horizontal para navegar</div>
            <Deck />
        </div>
    )
}

export default Home;