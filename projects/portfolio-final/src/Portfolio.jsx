import { useState } from 'react';
import './Portfolio.css';
// Importación de iconos desde react-icons
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiJest,
  SiNextdotjs,
  SiMysql
} from 'react-icons/si';

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
            href="https://tresenraya-dcl.netlify.app"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project2"></div>
            <div className="project-details">
              <h3>Tres en raya</h3>
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
            href="https://notas-dcl.netlify.app/"
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
            href="https://pokeapi-dcl.netlify.app/"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image project6"></div>
            <div className="project-details">
              <h3>Poke App</h3>
              <p>Busca datos de tus Pokémon favoritos.</p>
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
            <p className="intro">
              👋 ¡Hola! Me defino como un <span className="highlight">frontend lover</span> obsesionado con crear experiencias digitales que enamoren. Mi combo favorito: <strong>JavaScript</strong> 🚀 + <strong>React</strong> ⚛️ + <strong>CSS creativo</strong> 🎨
            </p>
            <div className="skills-section">
              <p>💻 Mis superpoderes técnicos:</p>
              <ul className="skills-grid">
                <li><span className="emoji">🧱</span> Componentes reutilizables y limpios</li>
                <li><span className="emoji">📱</span> Maquetación responsive (Grid/Flexbox)</li>
                <li><span className="emoji">🔌</span> Conexión con APIs y bases de datos</li>
                <li><span className="emoji">⚡</span> Optimización de performance web</li>
                <li><span className="emoji">🎯</span> UX/UI centrado en detalles</li>
                <li><span className="emoji">🧪</span> Testing básico con Jest</li>
              </ul>
            </div>
            <p className="learning">
              Actualmente inmerso en <strong>Next.js</strong> 🌐 y mejorando mis skills en <strong>TypeScript</strong> 📦. ¡Siempre aprendiendo algo nuevo!
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Experiencia Profesional y Estudios */}
      <section id="experiencia" className="experience">
        <h2>Experiencia Profesional y Estudios</h2>
        <div className="experience-container">
          <div className="experience-details">
            <h3>Experiencia Profesional</h3>
            <ul>
              <li>
                <strong>Desarrollador Backend</strong> en <em>Indra</em> (2018 - 2024)
                <p>
                  Mantenimiento de aplicaciones con Java y bases de datos.
                </p>
              </li>
              <li>
                <strong>Técnico Informático</strong> en <em>Ayto Alaquas</em> (2015 - 2016)
                <p>
                  Reparación y revisión de ordenadores. Trabajos con redes.
                </p>
              </li>
            </ul>
          </div>
          <div className="education-details">
            <h3>Estudios</h3>
            <ul>
              <li>
                <strong>Grado Superior en Desarrollo de Aplicaciones Multiplataforma</strong> en <em>IES Abastos</em> (2016 - 2018)
              </li>
              <li>
                <strong>Grado Medio en Sistemas Microinformáticos y Redes</strong> en <em>IES Salvador Gadea</em> (2014 - 2016)
              </li>
            </ul>
          </div>
        </div>

        {/* Nueva subsección para mostrar los lenguajes y tecnologías */}
        <div className="tech-stack">
          <h3>Lenguajes y Tecnologías</h3>
          <div className="tech-icons">
            <SiJavascript title="JavaScript" className="tech-icon" />
            <SiCss3 title="CSS" className="tech-icon" />
            <SiHtml5 title="HTML" className="tech-icon" />
            <SiReact title="React" className="tech-icon" />
            <SiTailwindcss title="Tailwind CSS" className="tech-icon" />
            <SiTypescript title="TypeScript" className="tech-icon" />
            <SiVite title="Vite" className="tech-icon" />
            <SiJest title="Jest" className="tech-icon" />
            <SiNextdotjs title="Next.js" className="tech-icon" />
            <SiMysql title="SQL" className="tech-icon" />
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p>¿Te gustaría que trabajemos juntos? ¡Hablemos!</p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/david-cortes-lajara"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/davidcortesdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:davidcortes.dev@gmail.com">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025. Portfolio de David Cortés. Bienvenido a mi web.</p>
      </footer>
    </div>
  );
};
