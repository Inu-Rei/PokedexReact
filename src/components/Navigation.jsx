import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import '../CSS/botonListado.css';

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);
  const navigate = useNavigate();

  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });

    onResetForm();
  };

  // Cerrar sesión
  const cerrarSesion = () => {
    // Lógica para cerrar sesión aquí
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <header className="container">
        <form onSubmit={onSearchSubmit}>
          <div className="form-group"></div>
          <nav className="navbar">
            <Link to="/" className="logo">
              <img
                src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
                alt="Logo Pokedex"
              />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className="barra-busqueda"
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nombre de pokemon"
            />
            <button className="btn-search">Buscar</button>

            <div className="button-Container">
              <button className="buttonMenu" onClick={cerrarSesion}>
                Cerrar Sesión
              </button>
              {/* Botón de menú */}
              <Link to="/HomePage">
                <button className="buttonMenu">Menu</button>
              </Link>
            </div>
          </nav>
        </form>
      </header>

      <Outlet />
    </>
  );
};
