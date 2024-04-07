import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main"; // Importa el componente Main
import Colecciones from "./Pages/Colecciones";
import Contactanos from "./Pages/Contactanos";
import Cuidado from "./Pages/Cuidado";
import Galeria from "./Pages/Galeria";
import Home from "./Pages/Home";
import Iniciar_Sesion from "./Pages/Iniciar_Sesion";
import Nosotros from "./Pages/Nosotros";
import Terminos from "./Pages/Terminos";
import Recuperacion from "./Pages/Recuperacion";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<>
            <Main /> {/* Renderiza Main solo en la página de inicio */}
            <Home />
          </>} />
          {/* Otras rutas */}
          <Route path="/Colecciones" element={<Colecciones />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Cuidado" element={<Cuidado />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Iniciar_Sesion" element={<Iniciar_Sesion />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/Recuperacion" element={<Recuperacion />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
