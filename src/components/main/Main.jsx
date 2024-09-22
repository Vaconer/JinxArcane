import React from 'react';
import './Main.css';
import jinxpng from './img/arcane_jinx_render_by_sineerie_deubsod.png'; // Importa a imagem PNG

function Main() {
  return (
    <div className='container'>
      <div className='main'>
        <p>LEAGUE OF LEGENDS PROD</p>
        <h1>ARCANE</h1>
        <h4>THERE IS A MONSTER</h4>
        <p>INSIDE ALL OF US</p>
        <button className='botao'>Discover</button>
      </div>
      <img className='png' src={jinxpng} alt="Jinx" />
    </div>
  );
}

export default Main;
