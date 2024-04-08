// Perfil.js
import React from 'react';


const Perfil = () => {
  return (
    <div className="perfil">
      <nav classname="sidebar">
        <header>
          <div classname="image-text">
            <span classname="image">
              <img src="images/Logo.jpg" alt />
            </span>
            <div classname="text logo-text">
              <span classname="name">Joyas Kogi</span>
              <span classname="profession">Naturaleza y joyas</span>
            </div>
          </div>
        </header>
        <div classname="menu-bar">
          <div classname="menu">
            <li classname="search-box">
              <i classname="bx bx-search icon" />
              <input type="text" placeholder="Buscar..." />
            </li>
            <ul classname="menu-links">
              <li classname="nav-link">
                <a href="#compras">
                  <i classname="bx bx-cart-alt icon" />
                  <span classname="text nav-text">Historial de compras</span>
                </a>
              </li>
              <li classname="nav-link">
                <a href="#coments">
                  <i classname="bx bx-detail icon" />
                  <span classname="text nav-text">Historial de comentarios</span>
                </a>
              </li>
              <li classname="nav-link">
                <a href="#garantias">
                  <i classname="bx bx-calendar icon" />
                  <span classname="text nav-text">Calendario de garantias</span>
                </a>
              </li>
              <li classname="nav-link">
                <a href="#joya">
                  <i classname="bx bx-edit-alt icon" />
                  <span classname="text nav-text">Personaliza tu joya</span>
                </a>
              </li>
              <li classname="nav-link">
                <a href="#cita">
                  <i classname="bx bx-calendar-plus icon" />
                  <span classname="text nav-text">Agenda tu cita</span>
                </a>
              </li>
              <li classname="nav-link">
                <a href="#profil">
                  <i classname="bx bx-cog icon" />
                  <span classname="text nav-text">Editar Perfil</span>
                </a>
              </li>
            </ul>
          </div>
          <div classname="bottom-content">
            <ul>
              <li>
                <link to="/Home" />
                <i classname="bx bx-log-out icon" />
                <span classname="text nav-text">Cerrar sesión</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Perfil;
