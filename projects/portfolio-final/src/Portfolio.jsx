import { useState } from 'react';
import './Portfolio.css';

export const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="portfolio">
      {/* Header con Navbar flotante */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">Portfolio</div>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li>
              <a href="#inicio" onClick={() => setIsOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#proyectos" onClick={() => setIsOpen(false)}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#sobre-mi" onClick={() => setIsOpen(false)}>
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sección Hero con fondo animado */}
      <section id="inicio" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Hola, soy David</h1>
          <p>Desarrollador Web | Diseñador de Experiencias</p>
          <a href="#proyectos" className="btn">
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos" className="projects">
        <h2>Proyectos Destacados</h2>
        <div className="projects-container">
          <a
            href="https://empleados-app-dcl.netlify.app"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project1"></div>
            <div className="project-details">
              <h3>Programa Empleados</h3>
              <p>Gestión avanzada de empleados con diseño intuitivo.</p>
            </div>
          </a>
          <a
            href="https://tic-tac-toe-dcl.netlify.app"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project2"></div>
            <div className="project-details">
              <h3>Tic Tac Toe</h3>
              <p>Juego clásico con un toque moderno e interactivo.</p>
            </div>
          </a>
          <a
            href="https://movie-finder-dcl.netlify.app"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project3"></div>
            <div className="project-details">
              <h3>Buscador de Películas</h3>
              <p>Descubre y busca películas con una interfaz dinámica.</p>
            </div>
          </a>
          <a
            href="https://app.netlify.com/sites/notas-dcl/overview"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project4"></div>
            <div className="project-details">
              <h3>Mis Notas</h3>
              <p>Organiza tus ideas con estilo y eficiencia.</p>
            </div>
          </a>
          <a
            href="https://heroes-app-dcl.netlify.app"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project5"></div>
            <div className="project-details">
              <h3>Info Héroes</h3>
              <p>Explora datos y curiosidades de tus héroes favoritos.</p>
            </div>
          </a>
          <a
            href="https://ejemplo.com"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project6"></div>
            <div className="project-details">
              <h3>Proyecto Extra</h3>
              <p>Innovación y creatividad en cada proyecto desarrollado.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="about">
        <h2>Sobre Mí</h2>
        <div className="about-container">
          <div className="about-image"></div>
          <div className="about-text">
            <p>
              Soy un apasionado desarrollador web con experiencia en crear
              interfaces modernas y funcionales. Mi objetivo es transformar
              ideas en experiencias digitales cautivadoras.
            </p>
            <p>
              Con un fuerte enfoque en el diseño responsivo y la interactividad,
              me esfuerzo por entregar proyectos que no solo sean estéticamente
              agradables, sino también altamente funcionales.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p>¿Te gustaría trabajar juntos? ¡Hablemos!</p>
        <div className="contact-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:correo@ejemplo.com">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Mi Portfolio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
