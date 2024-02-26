// Core
import React, { useEffect, useState } from "react";

// Components
import Voting from '../components/Voting';

// MUI
import { Rating as RatingMUI } from '@mui/material';

// API
import { getRatingMovies, voteMovie } from "../api/movie/index";
import { getUserId } from "../api/user";

const Rating = () => {
  const [buttonText, setButtonText] = useState('Next');
  const [etapa, setEtapa] = useState(1);
  const [filmes, setFilmes] = useState([]);
  const [filmeAtual, setFilmeAtual] = useState(null);
  const [rating, setRating] = useState(null);
  const [userId, setUserId] = useState(null);

  const getRatingMeaning = (numericRating) => {
    if (numericRating >= 0.0 && numericRating < 0.5) {
        return "Terrible";
    } else if (numericRating >= 0.5 && numericRating < 1.0) {
        return "Very Bad";
    } else if (numericRating >= 1.0 && numericRating < 1.5) {
        return "Bad";
    } else if (numericRating >= 1.5 && numericRating < 2.0) {
        return "Very Bad";
    } else if (numericRating >= 2.0 && numericRating < 2.5) {
        return "Bad";
    } else if (numericRating >= 2.5 && numericRating < 3.0) {
        return "Average";
    } else if (numericRating >= 3.0 && numericRating < 3.5) {
        return "Average";
    } else if (numericRating >= 3.5 && numericRating < 4.0) {
        return "Good";
    } else if (numericRating >= 4.0 && numericRating < 4.5) {
        return "Good";
    } else if (numericRating >= 4.5 && numericRating <= 5.0) {
        return "Excellent";
    }
};

  const handleVotar = (filmeId) => {
    console.log(`Usuario: ${userId[0]}`);
    console.log(`Filme: ${filmeId}`);
    console.log(`Rating: ${rating}`);

    if (etapa <= 14 && etapa < filmes.length) {
      setEtapa((prevEtapa) => prevEtapa + 1);
      setTimeout(() => {
        setFilmeAtual(filmes[etapa]);
      }, 0);
    } else {
      console.log('Processo de votação concluído');
      console.log('Redirecionando para Home');
      setButtonText('Go Home');
    }
  };

  // API functions
  const fetchUserId = async () => {
    try{
      const token = localStorage.getItem("token");
      const response = await getUserId({ nome: token });
      setUserId(response);
    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchRatingMovies = async () => {
      try {
        const response = await getRatingMovies();
        setFilmes(response);
      } catch (e) {
        console.log(e);
      }
    };

    setTimeout(() => {
      fetchUserId();
    }, 100)

    fetchRatingMovies();
  }, []);

  useEffect(() => {
    if (filmes.length > 0) {
      setFilmeAtual(filmes[0]);
    }
  }, [, filmes, etapa]);

  return (
    <div>
      {filmeAtual && etapa <= 14 && (
        <Voting
          filmeAtual={filmeAtual}
          onVotar={handleVotar}
          buttonText={buttonText}
        >
          <RatingMUI
            style={{ fontSize: '30px' }}
            name="simple-controlled"
            precision={0.5}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <p style={{ color: '#3c3c3c' }}>
            {
              !rating ? null : <b>{rating} {getRatingMeaning(rating)}</b>
            }
          </p>
        </Voting>
      )}
    </div>
  );
};

export default Rating;
