import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';
import '../../styles.css';

export const SideBar = ({ drawerWidth, isVisible }) => {
  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);

  return (
    <aside 
      className="sidebar" 
      style={{ 
        width: drawerWidth,
        left: isVisible ? 0 : -drawerWidth
      }}
    >
      <div className="sidebar-header">
        <h2>{displayName}</h2>
      </div>
      <hr />
      <ul className="sidebar-list">
        {notes.map(nota => (
          <SideBarItem key={nota.id} {...nota} />
        ))}
      </ul>
    </aside>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number,
  isVisible: PropTypes.bool
};