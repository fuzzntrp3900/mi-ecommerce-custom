import viteLogo from '../assets/vite.svg'; 
import CartWidget from './CartWidget';
import './NavBar.css';

export default function Navbar() {
  return (
    <>
      {/* 1. Corregido navbar-expand-md */}
      <nav className="navbar navbar-expand-md">
        <div className=" container-fluid justify-content-between">
          <a className="navbar-brand d-flex align-items-center" href="#">
            {/* 3. Corregida la ruta de la imagen de Vite */}
            <img 
              src={viteLogo}
              alt="logo" 
              width="30" 
              height="24" 
              className="d-inline-block align-text-top me-2" 
            />
            Mi Tienda
          </a>
          
          <ul className="nav justify-content-center">
            <li className="nav-item">
              {/* 2. Corregido aria-current */}
              <a className="nav-link active" aria-current="page" href="#">
                Bolsos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Carteras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Viaje
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="#">
                Fundas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="#">
                Accesorios
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}
