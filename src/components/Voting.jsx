import React from 'react';
import '../App.css'

// Components
import Movie from './Movie';

const Voting = ({ filmeAtual, onVotar, buttonText, children  }) => {
  return (
    <div>
      <h1 className='topTitle'>
        <b>Rate films for personalized<br /> recommendations</b>
      </h1>
      <Movie
        key={filmeAtual.id}
        id={filmeAtual.id}
        img={filmeAtual.img}
        titulo={filmeAtual.nome}
        genero={filmeAtual.genero}
        diretor={filmeAtual.diretor}
        onVotar={() => onVotar(filmeAtual.id)}
        buttonText={buttonText}
      >
        {children}
      </Movie>
    </div>
  );
};

export default Voting;
