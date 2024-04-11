import React, { useEffect, useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClick() {
      alert('Se ha cerrado sesión correctamente!');
    }

    const alertButton = document.getElementById('VerAlerta');
    alertButton.addEventListener('click', handleClick);

    // Cleanup: Remover el event listener cuando el componente se desmonte
    return () => {
      alertButton.removeEventListener('click', handleClick);
    };
  }, []); // El segundo argumento es un arreglo vacío para indicar que este efecto solo se ejecuta una vez, equivalente a componentDidMount

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sidebar ${isMenuOpen ? 'open' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="images/Logo.jpg" alt="" />
          </span>
          <div className="text logo-text">
            <span className="name">Joyas Kogi</span>
            <span className="profession">Naturaleza y joyas</span>
          </div>
        </div>
        <i className={`bx ${isMenuOpen ? 'bx-chevron-left' : 'bx-chevron-right'} toggle`} onClick={handleToggleMenu} />
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon" />
            <input type="text" placeholder="Buscar..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="#ventas">
                <i className="bx bx-cart-alt icon" />
                <span className="text nav-text">Historial de Ventas</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#citas">
                <i className="bx bx-detail icon" />
                <span className="text nav-text">Proximas citas</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#pedidos">
                <i className="bx bx-calendar icon" />
                <span className="text nav-text">Calendario pedidos</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#profil">
                <i className="bx bx-cog icon" />
                <span className="text nav-text">Editar Perfil</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <a href="Sesión.html" id="VerAlerta">
              <i className="bx bx-log-out icon" />
              <span className="text nav-text">cerrar sesión</span>
            </a>
          </li>
          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon" />
              <i className="bx bx-sun icon sun" />
            </div>
            <span className="mode-text text">Modo oscuro</span>
            <div className="toggle-switch">
              <span className="switch" />
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
