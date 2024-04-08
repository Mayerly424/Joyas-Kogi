import React from "react";
import { Link } from "react-router-dom";

const Iniciar_Sesion = () => {
  return (
    <section className="form-login">
      <div className="container--modifier">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="images/IMG-20230321-WA0004.jpg" alt />
            <div className="text">
              <span className="text-1">Cada nuevo amigo es <br /> una nueva aventura</span>
              <span className="text-2">Estemos conectados</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src="images/IMG-20230321-WA0033.jpg" alt />
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
              <form action="/PerfilAdmin">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <div className="gender">
                      <input type="radio" id="check-male" name="gender" defaultChecked />
                      <label htmlFor="check-male">Administrador</label>
                    </div>
                    <div className="gender">
                      <input type="radio" id="check-female" name="gender" />
                      <label htmlFor="check-female">Usuario</label>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: "\n                  .gender{\n                    margin-left: 25px;\n                  }\n                " }} />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" placeholder="Ingrese su email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Ingrese su contraseña" required />
                  </div>
                  <div className="text"><Link to="/Recuperacion">¿Olvido la contraseña?</Link></div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Iniciar sesión" />
                  </div>
                  <div className="text sign-up-text">¿Aún no tiene una cuenta? <label htmlFor="flip">Registrarse</label></div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Registrarse</div>
              <form action="/Perfil">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Ingrese su nombre" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" placeholder="Ingrese su email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Ingrese una contraseña" required />
                  </div>
                  <div className="tc-container">
                    <input type="checkbox" name="tc" id="tc" required />
                    Al enviar sus datos, usted acepta los <Link to="/Terminos"> terminos y condiciones. </Link>
                  </div>
                  <style dangerouslySetInnerHTML={{ __html: "\n                   .tc-container{\n                    font-size: 15px;\n  font-weight: 500\n                   }\n                " }} />
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
