import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import '../../styles.css';

export const NavBar = ({ drawerWidth, isSidebarOpen, onToggleSidebar }) => {
  const dispatch = useDispatch()

  const handleMenuClick = () => {
    onToggleSidebar(!isSidebarOpen);
  };

  const onLogout = () => {
    dispatch(startLogout())
  }

  return (
    <header 
      className="navbar" 
      style={{
        left: isSidebarOpen ? `${drawerWidth}px` : '0',
        width: isSidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%'
      }}
    >
      <div className="navbar-menu-icon" onClick={handleMenuClick}>
        <span className="menu-icon">&#9776;</span>
      </div>
      <div className="navbar-title">
        <h1>Mi Diario</h1>
      </div>
      <div className="navbar-actions">
        <button className="logout-button" onClick={onLogout}>
          Salir
        </button>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func
};