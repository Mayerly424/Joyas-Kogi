import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Iniciar_Sesion = ({ setLoggedIn }) => {
  const [redireccionar, setRedireccionar] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost/api-rest-php/inicio.php', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data.message); 
        setRedireccionar(true);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegistro = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost/api-rest-php/index.php', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        setRedireccionar(true);
      } else {
        console.error(data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <section className="form-login">
      <div className="container--modifier">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="images/gim.png" alt="" />
            <div className="text">
              <span className="text-1">Cada nuevo amigo es <br /> una nueva aventura</span>
              <span className="text-2">Estemos conectados</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src="images/gim.png" alt="" />
            <div className="text">
              <span className="text-1">Complete miles of journey <br /> with one step</span>
              <span className="text-2">Iniciemos</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Iniciar Sesión</div>
              <form onSubmit={handleLogin}>
                <div className="input-boxes">
                  <div className="input-box">
                    
                    <input type="text" placeholder="Ingrese su email" name="Correo" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Ingrese su contraseña" name="Contrasena" required />
                  </div>
                  <div className="text"><Link to="/Recuperacion">¿Olvidó la contraseña?</Link></div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Iniciar sesión" />
                  </div>
                  <div className="text sign-up-text">¿Aún no tiene una cuenta? <label htmlFor="flip">Registrarse</label></div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Registrarse</div>
              <form onSubmit={handleRegistro}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Ingrese su nombre" name="nombre" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="email" placeholder="Ingrese su email" name="correo" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Ingrese una contraseña" name="contrasena" required />
                  </div>
                  <div className="tc-container">
                    <input type="checkbox" name="tc" id="tc" required />
                    Al enviar sus datos, usted acepta los <Link to="/Terminos"> términos y condiciones. </Link>
                  </div>
                  <div className="button input-box">
                    <input type="submit" id="viewAlert" defaultValue="Registrarse" />
                  </div>
                  <div className="text sign-up-text">¿Ya tiene una cuenta? <label htmlFor="flip">Inicie sesión</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iniciar_Sesion;
