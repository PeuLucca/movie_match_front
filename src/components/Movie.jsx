// Core
import React, { useState } from "react";
import 'antd/dist/reset.css';

// AntD
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

// MUI
import { Rating } from '@mui/material';

const Movie = ({ titulo, genero, diretor, onVotar, buttonText }) => {
    const [rating, setRating] = useState(3.5);

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

    return (
        <div className="movie-rating-container">
          <div className="movie-rating-card">
            <div className="image-container">
              <img
                src="https://m.media-amazon.com/images/I/71Y5pMAw8rL.jpg"
                alt={titulo}
                style={{ borderRadius: "10px", width: "100%" }}
              />
            </div>
            <div className="content-container">
              <div className="title-container">
                <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#333' }}><b>{titulo}</b></h2>
              </div>
              <p style={{ fontSize: '18px', color: '#555' }}><i>{genero}</i></p>
              <p style={{ fontSize: '18px', color: '#555' }}><b>{diretor}</b></p>
              <Rating
                style={{ fontSize: '30px' }}
                name="simple-controlled"
                precision={0.5}
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
              />
              <p style={{ color: '#3c3c3c' }}>
                <b>{rating} {getRatingMeaning(rating)}</b>
              </p>
              <Button size="large" type="text" onClick={onVotar} className="vote-button">
                {
                    buttonText === 'Next'
                    ? <>{buttonText} <ArrowRightOutlined /></>
                    : <>{buttonText}</>
                }
              </Button>
            </div>
          </div>
        </div>
      );
};

export default Movie;