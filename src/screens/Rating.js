// Core
import React, { useState } from "react";

// Components
import Voting from '../components/Voting';

const Rating = () => {
  const [buttonText, setButtonText] = useState('Next');
  const [etapa, setEtapa] = useState(1);
  const [filmes] = useState([
    { id: 1, titulo: 'The Irishman', genero: 'Drama', diretor: 'Martin Scorsese' },
    { id: 2, titulo: 'Filme 2', genero: 'Genero do Filme 2', diretor: 'Diretor 2' },
    { id: 3, titulo: 'Filme 3', genero: 'Genero do Filme 3', diretor: 'Diretor 3' },
    { id: 4, titulo: 'Filme 4', genero: 'Genero do Filme 4', diretor: 'Diretor 4' },
  ]);
  const [filmeAtual, setFilmeAtual] = useState(filmes[0]);

  const handleVotar = (filmeId) => {
    // Lógica para processar o voto, armazenar dados, etc.
    console.log(`Votou no filme ${filmeId}`);

    // Avança para o próximo filme ou finaliza o processo
    if (etapa < 10 && etapa < filmes.length) {
        setEtapa(etapa + 1);
        setFilmeAtual(filmes[etapa]);
      } else{
        console.log('Processo de votação concluído');
        console.log('Redirecionando para Home');
        setButtonText('Go Home');
      }
    };

    return(
        <div>
            {etapa <= 10 && <Voting filmeAtual={filmeAtual} onVotar={handleVotar} buttonText={buttonText} />}
        </div>
    );
};

export default Rating;