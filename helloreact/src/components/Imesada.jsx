import React from 'react'
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
    return (
        <div>
            <h2>iMesada</h2>
            <p>Controlinho Financeiro</p>
            <p className="saldo">🤑Saldo: R${saldo}</p>
            <input type="text"
                value={inputSaldo}
                onChange={(e) => setInputSaldo(e.target.value)}
            />
            <br></br>
            <button onClick={creditar}>Crédito</button>
            <button onClick={debitar}>Débito</button>
        </div>
    )
}

export default Imesada
