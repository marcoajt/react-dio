import React from 'react'

import { useState } from 'react'

import Button from '../Button';


function Card() {

    const[valor, setValor] = useState(0);

    function Adicionar(){
        setValor(valor + 1);
    }

    function Remover(){
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <p>Meu texto no Card</p>
                <Button className="btn btn-success" onClick={Adicionar}>Adicionar</Button>
                <Button className="btn btn-danger" onClick={Remover}>Remover</Button>
                <p>{valor}</p>
            </div>
            
        </div>
    )
}

export default Card
