// Core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import '../App.css';

// Api
import { validateUser } from '../api';

const SignIn = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const validateForm = () => {
    if(!nome || !senha){
      alert("Por favor, preencha todos os campos");
    }else{
      validate();
    }
  };

  // API
  const validate = async () => {
    try{
      const response = await validateUser({ nome, senha });
      const validation = response[0].validation;
      const user = response[0].user;
      if(validation){
        localStorage.setItem("token", user);
        window.location.reload();
      }else{
        alert("Usuário não encontrado!")
        setNome("");
        setSenha("");
      }
    }catch(e){
      console.log(e);
    }
  };

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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            placeholder='Password'
            type="password"
            name="password"
            required
            className="form-input-sign-in"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="submit-button" style={{ width: '100%' }} onClick={validateForm}>
            Sign in
          </button>
          <a
            style={{
              fontSize: '13px',
              color: '#0056b3',
              cursor: 'pointer',
              marginTop: '3%'
            }}
          >
            <Link to="/signup">Ainda não tem cadastro?</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
