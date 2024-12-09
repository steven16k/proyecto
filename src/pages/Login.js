import React, { useState } from 'react';
import './Login.css';
import fondo from "../assets/Fondo.svg";
import logo from "../assets/UNP.svg";
import emailIcon from "../assets/icons/Email.svg";
import passwordIcon from "../assets/icons/Candado.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', { // Cambia la URL si tu backend está en otro puerto
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuario autenticado:', data);
        // Redirigir a la página principal o hacer lo que corresponda
      } else {
        const errorData = await response.text();
        setError(errorData); // Mostrar error si las credenciales son incorrectas
      }
    } catch (error) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="login-container">
      <div className="background">
        <img src={fondo} alt="Fondo" className="background-image" />
      </div>
      <div className="login-box">
        <img src={logo} alt="UNP Logo" className="logo" />
        <p className="title">UNIVERSIDAD NACIONAL POLITÉCNICA</p>
        <form className="login-form" onSubmit={handleLogin}>
          <InputGroup 
            icon={emailIcon} 
            type="email" 
            placeholder="Email:" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup 
            icon={passwordIcon} 
            type="password" 
            placeholder="Password:" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="forgot-password">¿Has Olvidado tu Contraseña?</p>
      </div>
    </div>
  );
};

const InputGroup = ({ icon, type, placeholder, value, onChange }) => (
  <div className="input-group">
    <img src={icon} alt={`${type} Icon`} className="input-icon" />
    <input 
      type={type} 
      placeholder={placeholder} 
      className="input-field" 
      value={value} 
      onChange={onChange} 
    />
  </div>
);

export default Login;
