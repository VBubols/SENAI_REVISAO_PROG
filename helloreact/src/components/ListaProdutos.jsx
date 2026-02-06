import React, { useState } from 'react'
import './ListaProdutos.css'
import Produto from './Produto';

function ListaProdutos() {

    const [produtos, setProdutos] = useState([
        {id: 0, nome: "Garrafa", preco: 50, descricao: "Garrafa de água 1,2L"},
        {id: 1, nome: "Teclado", preco: 350, descricao: "Teclado mecânico"}
    ])

    function cadastrarProduto(){
        const produto = {
            id: Date.now(),
            nome: prompt("Digite o nome do produto: "),
            preco: prompt("Digite o preço do produto: "),
            descricao: prompt("Descrição do produto: ")
        }

        setProdutos([produto, ...produtos])

    }

    return (
        <div className={"lista"}>
            <p>Lista de produtos</p>
            <button onClick={cadastrarProduto}>
                <img src="./icons/subway--add.svg" alt=""/>
            </button>
            <div className={"render-cards"}>
                {produtos.map( (prod) => (
                    <Produto p={prod} key={prod.id} />
                ) )}
            </div>
        </div>
    )
}

export default ListaProdutos
