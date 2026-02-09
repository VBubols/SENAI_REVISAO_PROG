import React from 'react'
import './Imesada.css'
import { useState } from 'react';

function Imesada() {

    const [saldo, setSaldo] = useState(0)
    const [inputSaldo, setInputSaldo] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [movimentacoes, setMovimentacoes] = useState([])
    const [tema, setTema] = useState('claro')

    function alternarTema(){
        setTema(tema === 'claro' ? 'escuro' : 'claro')
    }

    function movimentar(tipo){

        if(inputSaldo === '' || Number.isNaN(inputSaldo)){
            alert('Digite um valor válido no campo Valor')
            return
        } 
        if(inputDescricao === ''){
            alert('Digite o nome da movimentação')
            return
        }

        if(tipo == 'crédito'){
            setSaldo(saldo + Number(inputSaldo))
        } else {
            setSaldo(saldo - Number(inputSaldo))
        }

        const movimentacao = {
            tipo: tipo,
            valor: inputSaldo,
            id: Date.now(),
            descricao: inputDescricao
        }

        setMovimentacoes([movimentacao, ...movimentacoes])

    }

    return (
        <div className={`container-imesada ${tema}`}>
            <div className="form-imesada">

                <button className={"botao-tema"} onClick={alternarTema}>
                    {tema === 'claro' ? '🌙 Tema Escuro' : '☀ Tema Claro'}
                </button> 

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
                    <button id={"botao-credito"} className={"botoes"} onClick={() => movimentar('crédito')}>Crédito</button>
                    <button id={"botao-debito"} className={"botoes"} onClick={() => movimentar('débito')}>Débito</button>
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
