import Header from "./components/Header"

import { useState } from 'react';
import './App.css'
import Imesada from "./components/Imesada";

function App() {

  const [cont, setCont] = useState(0)
  const [inputPreco, setInputPreco] = useState('')
  const [dobro, setDobro] = useState('')

  function tratarTeste(){
    alert('Teste')
  }

  function calcularDobro(){
    let valor = inputPreco
    setDobro(valor * 2)
  }

  return (
    <>
      <Imesada />
      {/* <Header />
      <h1>Alo</h1>
      <input type="text" 
        value={inputPreco}
        onChange={(e) => setInputPreco(e.target.value)} 
      />
      {/* {inputPreco} */}

      {/* <button onClick={tratarTeste}>Teste</button> */}

      {/* <div className="resultado">
        <button onClick={calcularDobro}>Calcular</button>
        Dobro do número: {dobro}
      </div> */}

    </>
  )
}

export default App
