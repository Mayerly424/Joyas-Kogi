import React, { useState } from 'react';


function Nav() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function handleLogout() {
        alert('¡Se ha cerrado sesión correctamente!');
        // Aquí podrías añadir lógica adicional para cerrar la sesión del usuario si es necesario
    }

    return (
        <nav className={`sidebar ${menuOpen ? 'open' : 'close'} ${darkMode ? 'dark-mode' : ''}`}>
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
                <i className={`bx bx-chevron-right toggle ${menuOpen ? 'rotate' : ''}`} onClick={toggleMenu}></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                        <i className='bx bx-search icon'></i>
                        <input type="text" placeholder="Buscar..." />
                    </li>

                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#compras">
                                <i className='bx bx-cart-alt icon'></i>
                                <span className="text nav-text">Historial de compras</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#coments">
                                <i className='bx bx-detail icon'></i>
                                <span className="text nav-text">Historial de comentarios</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#garantias">
                                <i className='bx bx-calendar icon'></i>
                                <span className="text nav-text">Calendario de garantias</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#joya">
                                <i className='bx bx-edit-alt icon'></i>
                                <span className="text nav-text">Personaliza tu joya</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#cita">
                                <i className='bx bx-calendar-plus icon'></i>
                                <span className="text nav-text">Agenda tu cita</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#profil">
                                <i className='bx bx-cog icon'></i>
                                <span className="text nav-text">Editar Perfil</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li>
                        <a href="#" onClick={handleLogout}>
                            <i className='bx bx-log-out icon'></i>
                            <span className="text nav-text">Cerrar sesión</span>
                        </a>
                    </li>

                    <li className="mode">
                        <div className="sun-moon">
                            <i className={`bx bx-moon icon moon ${darkMode ? 'active' : ''}`}></i>
                            <i className={`bx bx-sun icon sun ${!darkMode ? 'active' : ''}`}></i>
                        </div>
                        <span className="mode-text text">Modo oscuro</span>

                        <div className={`toggle-switch ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
