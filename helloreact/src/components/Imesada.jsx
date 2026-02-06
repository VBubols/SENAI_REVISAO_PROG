import React from 'react'
import './Imesada.css'
import { useState } from 'react';

function Imesada() {

    const [saldo, setSaldo] = useState(0)
    const [inputSaldo, setInputSaldo] = useState()
    const [inputDescricao, setInputDescricao] = useState('')
    const [movimentacoes, setMovimentacoes] = useState([])

    function creditar(){
        let valor = Number(inputSaldo)
        let descricao = inputDescricao
        setSaldo(saldo + valor)

        const movimentacao = {
            tipo: 'crédito',
            valor: valor,
            id: Date.now(),
            descricao: descricao
        }

        setMovimentacoes([movimentacao, ...movimentacoes])
    }

    function debitar(){
        let valor = Number(inputSaldo)
        let descricao = inputDescricao
        setSaldo(saldo - valor)

        const movimentacao = {
            tipo: 'débito',
            valor: valor,
            id: Date.now(),
            descricao: descricao
        }

        setMovimentacoes([movimentacao, ...movimentacoes])
    }

    return (
        <div className={"container-imesada"}>
            <div className="form-imesada">
                <img className={"imagem-porco"} src="./imgs/porquinho.png" alt="porquinho"/>
                <h2 className={"titulo"}>iMesada</h2>
                <h3 className={"subtitulo"}>Controlinho Financeiro</h3>
                <p className={"saldo"}>🤑Saldo: R${saldo}</p>

                <input type="text" 
                    placeholder={"Nome da movimentação"}
                    className={"input-descricao"}
                    value={inputDescricao}
                    onChange={(e) => setInputDescricao(e.target.value)}
                />

                <input type="number"
                    placeholder={"Valor"}
                    className={"input-saldo"}
                    value={inputSaldo}
                    onChange={(e) => setInputSaldo(e.target.value)}
                />

                <div className={"div-botoes"}>
                    <button id={"botao-credito"} className={"botoes"} onClick={creditar}>Crédito</button>
                    <button id={"botao-debito"} className={"botoes"} onClick={debitar}>Débito</button>
                </div>

                <div className="div-movimentacoes">
                    {movimentacoes.map( (m) => (
                        <div className={m.tipo} key={m.id}>
                            <h3>{m.descricao} | </h3>
                            <p>R${m.valor} | </p>
                            <p>{m.tipo}</p>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    )
}

export default Imesada
