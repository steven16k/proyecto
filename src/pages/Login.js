  // login.js
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Login.css';
  import fondo from '../assets/Fondo.svg';
  import logo from '../assets/UNP.svg';
  import emailIcon from '../assets/icons/Email.svg';
  import passwordIcon from '../assets/icons/Candado.svg';

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();

      const userCredentials = { email, password };

      try {
        const response = await fetch('http://localhost:3333/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userCredentials),
        });

        if (response.ok) {
          const data = await response.json(); // Aquí se maneja la respuesta JSON

          if (data.status === 'success') {
            // Almacena el token de autenticación
            localStorage.setItem('authToken', data.token); // Usar el token recibido
            
            // Redirige a la página principal
            navigate('/home');
            
            // Recarga la página para asegurar que todo se actualice
            window.location.reload();  // Esto hará que la página se recargue automáticamente
          } else {
            setError(data.message || 'Error desconocido');
          }
        } else {
          setError('Error al iniciar sesión');
        }
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
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
            <button className="login-button" type="submit">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p className="forgot-password">¿Has olvidado tu contraseña?</p>
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
