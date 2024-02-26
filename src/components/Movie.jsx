// Core
import React from "react";
import 'antd/dist/reset.css';
import { useNavigate } from "react-router-dom";

// AntD
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Movie = (props) => {
    const { 
      id,
      img,
      titulo,
      genero,
      diretor,
      onVotar,
      buttonText,
      children
    } = props;

    const navigate = useNavigate();

    return (
        <div className="movie-rating-container">
          <div className="movie-rating-card">
            <div className="image-container">
              <img
                src={img}
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
              {children}
              <Button size="large" type="text" onClick={onVotar} className="vote-button">
                {
                  buttonText === 'Next'
                  ? <>{buttonText} <ArrowRightOutlined /></>
                  : <div onClick={() => navigate("/home")}>{buttonText}</div>
                }
              </Button>
            </div>
          </div>
        </div>
      );
};

export default Movie;