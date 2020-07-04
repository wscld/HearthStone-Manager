import React, { useEffect } from 'react';
import './styles.scss'
import { useRecoilState } from 'recoil';
import { classeState } from '../../atoms';
import { getLocalClasse, setLocalClasse, setLocalDeck } from '../../utils/local';
import { Link } from 'react-router-dom';
const Inicio = () => {
    const [classe, setClasse] = useRecoilState(classeState);

    useEffect(() => {
        const localClasse = getLocalClasse();
        if (localClasse) {
            setClasse(localClasse);
        }
    }, []);

    useEffect(() => {
        if (classe.length > 0) {
            setLocalClasse(classe);
        }
    }, [classe]);

    const handleChange = (val) => {
        setClasse(val);
        setLocalDeck([]);
    }

    return (
        <div className="inicio-container">
            <div className="box">
                <div className="title">Qual sua classe?</div>
                <select onChange={e => handleChange(e.target.value)}>
                    <option value=""></option>
                    <option value="mage">Mago</option>
                    <option value="hunter">Caçador</option>
                    <option value="druid">Druida</option>
                    <option value="paladin">Paladino</option>
                    <option value="neutral">Neutro</option>
                </select>
                <Link to={classe.length > 0? './deck':null}><div className="button">Continuar como {classe}</div></Link>
            </div>
        </div>
    );
}

export default Inicio;