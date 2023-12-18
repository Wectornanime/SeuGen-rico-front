import React, { useState } from 'react';
import './PesquisaVoz.css';
import Microfone from '../../assets/microfone.svg';
import MostrarDadosVoz from './MostrarDadosVoz'; // Importe o componente MostrarDadosVoz

function PesquisaVoz() {
    const [dadosGravados, setDadosGravados] = useState(null);
    const [ouvindo, setOuvindo] = useState(false);
    let recognition = null;

    const iniciarGravacao = () => {
        recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'pt-BR';

        recognition.onstart = () => {
            setOuvindo(true);
        };

        recognition.onresult = (event) => {
            const vozCapturada = event.results[0][0].transcript;
            const dadosJSON = {
                textoCapturado: vozCapturada,
                // Outros campos que você deseje adicionar
            };
            setDadosGravados(dadosJSON);
            setOuvindo(false);
        };

        recognition.start();
    };

    return (
        <div className='pesquisa-voz'>
            <div className='pesquisa-voz-container'>
                <button className={ouvindo ? 'pesquisa-voz-btn ouvindo' : 'pesquisa-voz-btn'} onClick={iniciarGravacao}>
                    <span>{ouvindo ? 'Escutando' : 'Pesquisa por voz'}</span>
                    <img src={Microfone} alt="Ícone do Microfone" />
                </button>
                {/* Passando os dados para o componente MostrarDadosVoz */}
                <MostrarDadosVoz dados={dadosGravados} />
            </div>
        </div>
    );
}

export default PesquisaVoz;
