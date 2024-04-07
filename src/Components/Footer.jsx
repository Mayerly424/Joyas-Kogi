import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Sobre nosotros</h4>
            <ul>
              <li><Link to="#">¿Quiénes somos?</Link></li>
              <li><Link to="#">Nuestros servicios</Link></li>
              <li><Link to="#">Política y privacidad</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ayuda</h4>
            <ul>
              <li><Link to="#">¿Necesitas ayuda?</Link></li>
              <li><Link to="#">JoyasKogi@gmail.com</Link></li>
              <li><Link to="#">Comunícate con nosotros</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ubicación y horarios</h4>
            <ul>
              <li><a href="https://goo.gl/maps/3zRajgVwzGTx53sP8">Calle 65 sur #80H 21</a></li>
              <li><Link to="#">Lunes a viernes de 8am a 8pm</Link></li>
              <li><Link to="#">Sábados de 9am a 5pm</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/joyaskogimanufacturas?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/joyaskogi?igshid=MzRlODBiNWFlZA=="><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/joyaskogi?igshid=MzRlODBiNWFlZA=="><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/573223081570"><i className="fab fa-whatsapp"></i></a>
              <a href="https://pin.it/7iUql1a"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="grupo2">
          <small>&copy; 2023 <b>Joyas Kogi</b> - Todos derechos reservados</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
