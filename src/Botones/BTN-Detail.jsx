import React from 'react';
import { Link } from 'react-router-dom';
import  '../CSS/BTN-Menu.css';

const PokemonDetail = () => {
  return (
    <div className="buttonContainer">
    <Link to="/HomePage">
      <button className="buttonMenu">Menu</button>
    </Link>
    </div>
  );
};

export default PokemonDetail;