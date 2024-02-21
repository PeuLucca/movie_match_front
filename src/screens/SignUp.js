// Core
import React, { useState } from 'react';

// Style
import '../App.css';

// Api
import { createUser } from '../api';

const SignUp = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const validateForm = () => {
    if(!nome || !senha){
      alert("Por favor, preencha todos os campos");
    }else if(senha !== confirmarSenha){
      alert("Senhas diferentes! Por favor preencha-as corretamente");
    }else{
      validate();
    }
  };

  // API
  const validate = async () => {
    try{
      const response = await createUser({ nome, senha });
      localStorage.setItem("token", response[0].result.nome);
      window.location.reload();
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
        <h2 style={{ fontWeight: '800', textAlign: 'center' }}>Sign Up</h2>
        <div className='form'>
          <input
            placeholder='Your username (peulucca03)'
            type="text"
            name="name"
            required
            className="form-input-sign-in"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            placeholder='Your password'
            type="password"
            name="password"
            required
            className="form-input-sign-in"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            placeholder='Type your password again'
            type="password"
            name="password"
            required
            className="form-input-sign-in"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

        <button className="submit-button" style={{ width: '100%' }} onClick={validateForm}>
          Sign up
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
