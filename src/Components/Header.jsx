import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const links = [
        { path: "/Home", label: "Inicio" },
        { path: "/Colecciones", label: "Colecciones" },
        { path: "/Galeria", label: "Galeria" },
        { path: "/Cuidado", label: "Cuidado" },
        { path: "/Nosotros", label: "Nosotros" },
        { path: "/Iniciar_Sesion", label: "Iniciar Sesión" },
        { path: "/Contactanos", label: "Contactanos" }
    ];

    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav">
                        <div className="menu-toggle">
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-times"></i>
                        </div>
                        <Link to="/Index" className="logo">JOYASKOGI</Link>
                        <ul className="nav-list">
                            {links.map(link => (
                                <li className="nav-item" key={link.path}>
                                    <Link to={link.path} className="nav-link">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="hero" id="hero">
                <div className="container">
                    <h2 className="h2-sub">
                        <span className="fil">B</span>ienvenido
                    </h2>
                    <h1 className="head">Joyeria Kogi</h1>
                    <div className="he-des">
                        <h5>Expertos artesanos en diseño, desarrollo y produccion de accesorios de joyeria</h5>
                        <Link to="/Nosotros" className="btn cta-btn">Explora</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;


