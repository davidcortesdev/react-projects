/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navegador } from '../ui/nav/Navegador';
import { startUpdateHeroe } from '../../store/auth/thunks';
import './SelectHero.css'

export const SelectHero = () => {

  const { uid, heroe, motivoHeroe, nombre, apellido1 } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [selectedHero, setSelectedHero] = useState(heroe || 'Hulk');
  const [motivo, setMotivo] = useState(motivoHeroe);


  const heroImages = {
    'Hulk': '/hulk.jpg',
    'Iron Man': '/ironman.jpg',
    'Capitán América': '/captain-america.png',
  };


  const handleHeroeChange = (e) => {
    setSelectedHero(e.target.value);
  }


  const handleConfirm = () => {
    if (!motivo.trim()) {
      alert('Por favor, escribe por qué seleccionas a este héroe.');
      return;
    }
  
    dispatch(startUpdateHeroe(uid, selectedHero, motivo));
    navigate('/menu');
  };


  return (

    <div className="dashboard">
      
      <Navegador nombre={nombre} apellido1={apellido1} />

      <div className="dashboard-wrapper">
        <div className="dashboard-content">
          <section className="dashboard-card hero">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">🦸</span>
                Selecciona tu Superhéroe
              </h3>
            </div>
            <div className="card-content">
              <div className="hero-container">

                {/* Selector para elegir el superhéroe */}
                <div className="form-group">
                  <label className="form-label">Elige tu superhéroe</label>
      
                  <SelectInput 
                      label="Heroe"
                      value={selectedHero}
                      options={['Hulk', 'Iron Man', 'Capitán América']}
                      onChange={handleHeroeChange}
                    />
                </div>

                {/* Imagen del superhéroe seleccionado */}
                <div className="hero-preview">
                  <img 
                    src={heroImages[selectedHero]} 
                    defaultValue={heroImages.Hulk}
                    className="hero-image"
                  />
                  <div className="hero-details">
                    <textarea 
                      className="hero-input" 
                      placeholder="Explica por qué seleccionas a este héroe..."
                      value={motivo}
                      onChange={(e) => setMotivo(e.target.value)}
                    />
                  </div>
                </div>

                {/* Botón para confirmar y navegar al menú principal */}
                <div className="hero-actions">
                  <button className="hero-btn primary" onClick={handleConfirm}>
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  );
};



const SelectInput = ({ label, value, options, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <select className="form-select" value={value} onChange={onChange}>
      {options.map(option => (
        <option 
        key={option} 
        value={option}
        style={{ backgroundColor: '#f0f0f0', color: '#333' }}
      >
      {option}
        </option>
      ))}
    </select>
  </div>
);