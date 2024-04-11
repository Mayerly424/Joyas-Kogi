import React, { useEffect } from 'react';

function Nav() {
    useEffect(() => {
        function handleLogout() {
            alert('Se ha cerrado sesión correctamente!');
        }
        
        document.getElementById("logout-link").addEventListener("click", handleLogout);
        
        return () => {
            document.getElementById("logout-link").removeEventListener("click", handleLogout);
        };
    }, []);

    return (
        <nav>
            <div className="logo-name">
                <div className="logo-image">
                    <img src="images/Logo.jpg" alt="" />
                </div>
                <span className="logo_name">JoyasKogi</span>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <a href="#dash-content">
                            <i className="uil uil-estate"></i>
                            <span className="link-name">Actividad usuarios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#colecciones">
                            <i className="uil uil-files-landscapes"></i>
                            <span className="link-name">Colecciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#report">
                            <i className="uil uil-chart"></i>
                            <span className="link-name">Reportes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#favoritos">
                            <i className="uil uil-thumbs-up"></i>
                            <span className="link-name">Favoritos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contactanos">
                            <i className="uil uil-comments"></i>
                            <span className="link-name">Contactanos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#tienda">
                            <i className="uil uil-shop"></i>
                            <span className="link-name">Tienda</span>
                        </a>
                    </li>
                </ul>
                
                <ul className="logout-mode">
                    <li>
                        <a href="Sesión.html" id="logout-link">
                            <i className="uil uil-signout"></i>
                            <span className="link-name">Cerrar sesión</span>
                        </a>
                    </li>
                    <li className="mode">
                        <a href="#">
                            <i className="uil uil-moon"></i>
                            <span className="link-name">Modo oscuro</span>
                        </a>
                        <div className="mode-toggle">
                            <span className="switch"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
