import React from "react";
import "./Login.css"; // Asegúrate de que este archivo CSS exista en la misma carpeta
import fondo from "../assets/Fondo.svg"; // Ruta correcta según la estructura de tu proyecto
import logo from "../assets/UNP.svg";
import emailIcon from "../assets/icons/Email.svg";
import passwordIcon from "../assets/icons/Candado.svg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="background">
        <img src={fondo} alt="Fondo" className="background-image" />
      </div>
      <div className="login-box">
        <img src={logo} alt="UNP Logo" className="logo" />
        <p className="title">UNIVERSIDAD NACIONAL POLITÉCNICA</p>
        <form className="login-form">
          <InputGroup icon={emailIcon} type="email" placeholder="Email:" />
          <InputGroup icon={passwordIcon} type="password" placeholder="Password:" />
          <button className="login-button">Login</button>
        </form>
        <p className="forgot-password">¿Has Olvidado tu Contraseña?</p>
      </div>
    </div>
  );
};

const InputGroup = ({ icon, type, placeholder }) => (
  <div className="input-group">
    <img src={icon} alt={`${type} Icon`} className="input-icon" />
    <input type={type} placeholder={placeholder} className="input-field" />
  </div>
);

export default Login;
