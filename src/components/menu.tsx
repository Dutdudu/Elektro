import React from 'react';
import { Nav } from './menu.style'; 
import Icone from './icone'; 

const Menu: React.FC = () => {
  const casa = require('../assets/casa.png'); 
  const chat = require('../assets/chat.png'); 
  const avisos = require('../assets/bell.png'); 
  const perfil = require('../assets/perfil.png'); 

  return (
    <Nav>
      <Icone image={casa} texto="Home" />
      <Icone image={chat} texto="Chat" />
      <Icone image={avisos} texto="Avisos" />
      <Icone image={perfil} texto="Perfil" />
    </Nav>
  );
};

export default Menu;