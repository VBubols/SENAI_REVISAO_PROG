import React from 'react'
import './Imesada.css'
import { useState } from 'react';

function Imesada() {
    const [saldo, setSaldo] = useState(0)
    const [inputSaldo, setInputSaldo] = useState(0)

    function creditar(){
        let valor = parseFloat(inputSaldo)
        setSaldo(valor + saldo)
    }

    function debitar(){
        let valor = parseFloat(inputSaldo)
        setSaldo(saldo - valor)
    }

    function atualizarValor(e){
        setInputSaldo(e.target.value)
    }

    return (
        <div className={"container-imesada"}>
            <div className="form-imesada">
                <img className={"imagem-porco"} src="./imgs/porquinho.png" alt="porquinho"/>
                <h2 className={"titulo"}>iMesada</h2>
                <h3 className={"subtitulo"}>Controlinho Financeiro</h3>
                <p className={"saldo"}>🤑Saldo: R${saldo}</p>
                <input type="number"
                    className={"input-saldo"}
                    value={inputSaldo}
                    onChange={atualizarValor}
                />
                <div className={"div-botoes"}>
                    <button id={"credito"} className={"botoes"} onClick={creditar}>Crédito</button>
                    <button id={"debito"} className={"botoes"} onClick={debitar}>Débito</button>
                </div>
            </div>
        </div>
    )
}

export default Imesada
