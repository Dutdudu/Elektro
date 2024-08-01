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
      <a href='/'> <Icone image={casa} texto="Home" /></a>
      <a href='/erro'><Icone image={chat} texto="Chat" /></a>
      <a href='/erro'><Icone image={avisos} texto="Avisos" /></a>
      <a href='/erro'><Icone image={perfil} texto="Perfil" /></a>
    </Nav>
  );
};

export default Menu;