import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export const NavBar = () => {
  return (

    <div className="header">
        <a href="#" className="logo">Logo</a>

        <nav className="navbar">
            <Link to="/menu">Home</Link>
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>

    </div>
  )
}
