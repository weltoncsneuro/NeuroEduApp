// src/components/Menu/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/novidades">Novidades</Link></li>
        <li><Link to="/treinamento">Treinamento</Link></li>
        <li><Link to="/flashcards">Flashcards</Link></li>
        <li><Link to="/admin">Administração</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
