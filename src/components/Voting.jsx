import React from 'react';
import '../App.css'

// Components
import Movie from './Movie';

const Voting = ({ filmeAtual, onVotar, buttonText  }) => {
  return (
    <div>
      <h1 className='topTitle'>
        <b>Rate films for personalized<br /> recommendations</b>
      </h1>
      <Movie
        key={filmeAtual.id}
        titulo={filmeAtual.titulo}
        genero={filmeAtual.genero}
        diretor={filmeAtual.diretor}
        onVotar={() => onVotar(filmeAtual.id)}
        buttonText={buttonText}
      />
    </div>
  );
};

export default Voting;
