// Core
import React, { useState } from 'react';

// Api
import { createMovie } from "../api/movie/index"

const NewMovie = () => {
  const [formData, setFormData] = useState({
    nome: '',
    genero: '',
    diretor: '',
    img: '',
  });
  const [sucess, setSuccess] = useState({ movie: null, status: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    if(
      !formData.nome || !formData.genero ||
      !formData.diretor || !formData.img
    ){
      alert("Please fill all the movie fields!")
    }else{
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try{
      const response = await createMovie(formData);
      if(response[0].result){
        setSuccess({ movie: formData.nome, status: true })
        clearFields();
      }
    }catch(e){
      console.log(e);
    }
  };

  const clearFields = () => {
    setFormData({
      nome: '',
      genero: '',
      diretor: '',
      img: '',
    });
  };

  return (
    <div className="add-movie-container">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontWeight: '700' }}>
        Add Movie
      </h2>
      <form className="add-movie-form">
        <label className="form-label">
          Name
          <input
            placeholder='The Irishman'
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Genre
          <input
            placeholder='Drama'
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Director
          <input
            placeholder='Martin Scorsese'
            type="text"
            name="diretor"
            value={formData.diretor}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Image URL
          <input
            placeholder='your-movie-image.com/irishman-image'
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <button className="submit-button" onClick={validate}>
          Save
        </button>
      </form>
      {
        sucess.status
        ? <h4 style={{ textAlign: 'center', marginTop: '5px', color: 'green' }}>{sucess.movie} successfully created</h4>
        : null
      }
    </div>
  );
};

export default NewMovie;
