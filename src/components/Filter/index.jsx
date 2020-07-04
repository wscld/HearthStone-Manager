import React, { useState } from 'react';


const Filter = (props) => {
    const [classe, setClasse] = useState("");
    const [tipo, setTipo] = useState("");
    const [nome, setNome] = useState("");
    const [id, setId] = useState("");

    return (
        <>
            <input placeholder="classe" onChange={e => setClasse(e.target.value)}></input>
            <input placeholder="tipo" onChange={e => setTipo(e.target.value)}></input>
            <input placeholder="id" onChange={e => setId(e.target.value)}></input>
            <input placeholder="nome" onChange={e => setNome(e.target.value)}></input>
            <div className="button" onClick={() => { props.filterCallback(classe, tipo, nome, id)}}>Filtrar</div>
        </>
    )
}

export default Filter;