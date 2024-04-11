import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Resto del código...

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Colecciones from "./Pages/Colecciones";
import Contactanos from "./Pages/Contactanos";
import Cuidado from "./Pages/Cuidado";
import Galeria from "./Pages/Galeria";
import Home from "./Pages/Home";
import Iniciar_Sesion from "./Pages/Iniciar_Sesion";
import Nosotros from "./Pages/Nosotros";
import Terminos from "./Pages/Terminos";
import Recuperacion from "./Pages/Recuperacion";
import Perfil from "./Pages/Perfil";
import PerfilAdmin from "./Pages/PerfilAdmin";
import Vendedor from "./Pages/Vendedor"; // Importa la página del vendedor

function App() {
  // Estado para controlar si el usuario ha iniciado sesión
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Condición para mostrar el header solo si el usuario no ha iniciado sesión */}
        {!loggedIn && <Header />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Colecciones" element={<Colecciones />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Cuidado" element={<Cuidado />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Iniciar_Sesion" element={<Iniciar_Sesion setLoggedIn={setLoggedIn} />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/Recuperacion" element={<Recuperacion />} />
          {/* Ruta protegida para el perfil */}
          <Route path="/Perfil" element={loggedIn ? <Perfil /> : <Iniciar_Sesion setLoggedIn={setLoggedIn} />} />
          <Route path="/PerfilAdmin" element={loggedIn ? <PerfilAdmin /> : <Navigate to="/Iniciar_Sesion" />} />
          <Route path="/Vendedor" element={<Vendedor />} /> {/* Agrega la ruta del vendedor */}
        </Routes>
        {/* Condición para mostrar el footer solo si el usuario no ha iniciado sesión */}
        {!loggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
