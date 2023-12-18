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


function App() {
  return (
    <main className="principal">
        <Cabecalho />
        <Pesquisa />
        <PesquisaVoz />
        <CategoriaNome1 />
        <Carrossel1 />
        <CategoriaNome2 />
        <Carrossel2 />
        <CategoriaNome3 />
        <Carrossel3 />
    </main>
  );
}

export default App;
