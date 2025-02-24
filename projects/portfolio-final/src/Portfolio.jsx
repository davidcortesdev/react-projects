import './Portfolio.css';

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Header con Navbar */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">Mi Portfolio</div>
          <ul className="nav-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#sobre-mi">Sobre Mí</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección Hero */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Bienvenido a mi mundo digital</h1>
          <p>Explora mi trabajo y descubre mi pasión por la tecnología</p>
          <a href="#proyectos" className="btn">Ver Proyectos</a>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos" className="projects">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          <a href="https://empleados-app-dcl.netlify.app">
            <div className="project-card">
              <div className="card-img project1"></div>
              <div className="card-content">
                <h3>Programa empleados</h3>
                <p>Una aplicación para gestionar los empleados de una empresa.</p>
              </div>
            </div>
          </a>
          <a href="https://tic-tac-toe-dcl.netlify.app">
            <div className="project-card">
              <div className="card-img project2"></div>
              <div className="card-content">
                <h3>Tic Tac Toe</h3>
                <p>Un juego clásico y divertido.</p>
              </div>
            </div>
          </a>
          <a href="https://movie-finder-dcl.netlify.app">
            <div className="project-card">
              <div className="card-img project3"></div>
              <div className="card-content">
                <h3>Buscador de películas</h3>
                <p>Un buscador de películas, obtenidas de una API.</p>
              </div>
            </div>
          </a>
          <a href="https://app.netlify.com/sites/notas-dcl/overview">
            <div className="project-card">
              <div className="card-img project4"></div>
              <div className="card-content">
                <h3>Mis notas</h3>
                <p>Una aplicación para crear notas con texto e imagenes.</p>
              </div>
            </div>
          </a>
          <a href="https://heroes-app-dcl.netlify.app">
            <div className="project-card">
              <div className="card-img project5"></div>
              <div className="card-content">
                <h3>Info Héroes</h3>
                <p>Encuentra datos sobre tus héroes favoritos.</p>
              </div>
            </div>
          </a>
          <a href="https://ejemplo.com">
            <div className="project-card">
              <div className="card-img project6"></div>
              <div className="card-content">
                <h3>Programa empleados</h3>
                <p>Una aplicación para gestionar los empleados de una empresa.</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="about">
        <h2>Sobre Mí</h2>
        <div className="about-content">
          <div className="profile-pic"></div>
          <div className="profile-info">
            <p>
              Soy un desarrollador apasionado y creativo, con un enfoque en soluciones modernas e interactivas.
              Me encanta experimentar con nuevas tecnologías y transformar ideas en realidades digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p>Si deseas colaborar o tienes alguna consulta, no dudes en contactarme.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
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
