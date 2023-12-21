import './App.css';

import Cabecalho from './components/home/Cabecalho';
import Pesquisa from './components/home/Pesquisa';
import PesquisaVoz from './components/home/PesquisaVoz';
import CategoriaNome1 from './components/home/CategoriaNome1';
import Carrossel1 from './components/home/Carrossel1';
import CategoriaNome2 from './components/home/CategoriaNome2';
import Carrossel2 from './components/home/Carrossel2';
import CategoriaNome3 from './components/home/CategoriaNome3';
import Carrossel3 from './components/home/Carrossel3';
import { useState } from 'react';


function App() {
  const [remedysState, setRemedysState] = useState(null);

  return (
    <main className="principal">
        <Cabecalho />
        <Pesquisa remedysState={remedysState} setRemedysState={setRemedysState} />
        <PesquisaVoz />


        {
          remedysState ? (<CategoriaNome1 />) : (null)
        }

        {/* <CategoriaNome1 />
        <Carrossel1 />
        <CategoriaNome2 />
        <Carrossel2 />
        <CategoriaNome3 />
        <Carrossel3 /> */}
    </main>
  );
}

export default App;
