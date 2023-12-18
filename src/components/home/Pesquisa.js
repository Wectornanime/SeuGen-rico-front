import React from 'react';
import './Pesquisa.css';
import magnify from '../../assets/search-magnify.svg';
import PesquisaVoz from './PesquisaVoz'; // Importe o componente de pesquisa por voz

function Pesquisa() {
    return (
        <div className="pesquisa">
            <div className="container-pesquisa">
                <div className="input-wrapper">
                    <input id='medicamento' className='barra-pesquisa' type='text' placeholder='Pesquisar medicamento' />
                    <span className='input-img'><img src={magnify} alt='Pesquisar' /></span>
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;
