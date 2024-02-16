import React, { useState } from 'react';

const NewMovie = () => {
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    director: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save the movie data to the database or perform other actions
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      genre: '',
      director: '',
      imageUrl: '',
    });
  };

  return (
    <div className="add-movie-container">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontWeight: '700' }}>
        Add Movie
      </h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <label className="form-label">
          Name
          <input
            placeholder='The Irishman'
            type="text"
            name="name"
            value={formData.name}
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
            name="genre"
            value={formData.genre}
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
            name="director"
            value={formData.director}
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
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
