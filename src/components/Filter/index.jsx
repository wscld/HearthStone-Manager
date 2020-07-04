import React, { useState } from 'react';
import './styles.scss';

const Filter = (props) => {
    const [classe, setClasse] = useState("");
    const [tipo, setTipo] = useState("");
    const [nome, setNome] = useState("");
    const [id, setId] = useState("");

    return (
        <div className="filter-container">
            <select onChange={e => setTipo(e.target.value)}>
                <option value="">Todos os tipos</option>
                <option value="spell">Magia</option>
                <option value="minion">Criatura</option>
            </select>
            <select onChange={e => setClasse(e.target.value)}>
                <option value="">Todos as classes</option>
                <option value="mage">Mago</option>
                <option value="hunter">Caçador</option>
                <option value="druid">Druida</option>
                <option value="paladin">Paladino</option>
                <option value="neutral">Neutro</option>
            </select>
            <input placeholder="id" onChange={e => setId(e.target.value)}></input>
            <input placeholder="nome" onChange={e => setNome(e.target.value)}></input>
            <div className="button" onClick={() => { props.filterCallback(classe, tipo, nome, id) }}>Filtrar</div>
        </div>
    )
}

export default Filter;