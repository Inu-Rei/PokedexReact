import React from 'react';
import { useNavigate } from 'react-router-dom';
import  '../CSS/botonListado.css'

const Botones = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    // Lógica para cerrar sesión aquí
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="button-Container">
    <button className="buttonMenu" onClick={cerrarSesion}>
      Cerrar Sesión
    </button>
    </div>
  );
};

export default Botones;
