import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';
import '../../styles.css';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setIsSidebarVisible(isDesktop);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarVisible(isOpen);
  };

  return (
    <div className="journal-layout fade-in">
      <SideBar drawerWidth={drawerWidth} isVisible={isSidebarVisible} />
      <NavBar 
        drawerWidth={drawerWidth} 
        isSidebarOpen={isSidebarVisible}
        onToggleSidebar={handleToggleSidebar} 
      />
      <main className="journal-content">
        {children}
      </main>
    </div>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node,
};