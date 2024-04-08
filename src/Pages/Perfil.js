import React from 'react';
import Nav from './Perfil/Nav';
import Section from './Perfil/Section';

function Perfil() {
  return (
    <div>
      <Nav /> {/* Renderiza el componente Nav para la barra lateral */}
      <Section /> {/* Renderiza el componente Section para el contenido del perfil */}
    </div>
  );
}

export default Perfil;
