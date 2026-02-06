import './App.css';
import Imesada from "./components/Imesada";
import Header from "./components/Header";
import ListaProdutos from './components/ListaProdutos';

function App() {

  return (
    <div className={'container-app'}>
      <Header />
      {/* <Imesada /> */}
      <ListaProdutos />
    </div>
  )
}

export default App
