import React from 'react'

function Produto(props) {
    return (
        <div>
            <p>Produtos: {props.p.nome}</p>
            <p>Preço: {props.p.preco}</p>
            <p>Descrição: {props.p.descricao}</p>
        </div>
    )
}

export default Produto
