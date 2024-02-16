// Core
import React from 'react';

// Style
import '../App.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="logo-container">
        <img src="https://cdn2.iconfinder.com/data/icons/audiovisual-production-filled-pixel-perfect/64/visual-production_clapper-512.png" alt="Clapper Logo" />
      </div>
      <div className="form-container">
        <h2 style={{ fontWeight: '800', textAlign: 'center' }}>Sign In</h2>
        <div className='form'>
          <input
            placeholder='Username'
            type="text"
            name="name"
            required
            className="form-input-sign-in"
          />
          <input
            placeholder='Password'
            type="password"
            name="password"
            required
            className="form-input-sign-in"
          />

        <button className="submit-button" style={{ width: '100%' }}>
          Sign in
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
