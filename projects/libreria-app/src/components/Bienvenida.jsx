import { Link } from 'react-router-dom';
import '../styles/Bienvenida.css';

export const Bienvenida = () => {
  return (
    <div className="texto-container">
        <p className='texto-bienvenida'>
            Encuentras tus libros favoritos
        </p>
        
        <button className='boton-bienvenida'>
          <Link to="/libreria" style={{ textDecoration: 'none' }}>
            Buscar
          </Link>
        </button>
    </div>
  )
}
