import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const links = [
        { path: "/Home", label: "Inicio" },
        { path: "/Galeria", label: "Galeria" },
        
        { path: "/Nosotros", label: "Nosotros" },
        { path: "/Iniciar_Sesion", label: "Iniciar Sesión" },
       
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
                        <Link to="/Home" className="logo">GIMBOX</Link>
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
                    <h1 className="head">GIM BOX</h1>
                    <div className="he-des">
                        <h5>PON TU CUERPO Y PERSEVERANCIA A PRUEBA</h5>
                        <Link to="/Nosotros" className="btn cta-btn">Explora</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;


