/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Navegador } from './nav/Navegador';
import { startActualizarUsuario, startUpdateHeroe } from '../../store/auth/thunks';
import { useNavigate } from 'react-router-dom';
import './menu.css';

  export const Menu = () => {

    const navigate = useNavigate();
    const heroImages = {
      'Hulk': '/hulk.jpg',
      'Iron Man': '/ironman.jpg',
      'Capitán América': '/captain-america.png',
    };
    
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);
    const { email, nombre, apellido1, apellido2, fechaNacimiento, fechaAntiguedad, departamento, puesto, heroe, motivoHeroe } = useSelector(state => state.auth);
  
    const [localNombre, setLocalNombre] = useState(nombre);
    const [localApellido1, setLocalApellido1] = useState(apellido1);
    const [localApellido2, setLocalApellido2] = useState(apellido2);
    const [localFechaNacimiento, setLocalFechaNacimiento] = useState(fechaNacimiento);
    const [localFechaAntiguedad, setLocalFechaAntiguedad] = useState(fechaAntiguedad);
    const [localDepartamento, setLocalDepartamento] = useState(departamento);
    const [localPuesto, setLocalPuesto] = useState(puesto);
    const [localHeroe, setLocalHeroe] = useState(heroe);
    const [localMotivoHeroe, setLocalMotivoHeroe] = useState(motivoHeroe);
    
    useEffect(() => {
      setLocalHeroe(heroe);
      setLocalMotivoHeroe(motivoHeroe);
    }, [heroe, motivoHeroe]);



    const [isEditing, setIsEditing] = useState(false);

    const handleEditarGuardar = () => {
      setIsEditing(!isEditing);
    };

    const handleGuardarUsuario = () => {
      dispatch(startActualizarUsuario(uid, localNombre, localApellido1, localApellido2, localFechaNacimiento, localFechaAntiguedad, localDepartamento, localPuesto, localHeroe, localMotivoHeroe));
      setIsEditing(false);
    };

    const handleGuardarNuevoHeroe = () => {
      dispatch(startUpdateHeroe(uid, localHeroe, localMotivoHeroe))
    }

    const handleNavigate = (path) => {
      navigate(path);
    };

    return (
      <div className="dashboard">
        
        <Navegador nombre={nombre} apellido1={apellido1} />

        <div className="dashboard-wrapper">
          {/* Contenido principal */}
            <div className="dashboard-content">
              
              {/* Header del dashboard */}
              <div className="dashboard-header">
                <div className="user-profile">
                  <img 
                    src={heroImages[heroe]}
                    alt="Profile" 
                    className="profile-image"
                  />
                  <div className="profile-info">
                    <h2 className="profile-title">{puesto}</h2>
                    <div className="profile-meta">
                      <span className="profile-department">{departamento}</span>
                      <span className="profile-antiquity">Antigüedad: {fechaAntiguedad}</span>
                    </div>
                  </div>
                </div>
                <div className="header-actions">
                  <button 
                  className="action-btn primary"
                  onClick={() => handleNavigate('/chatpage')}>
                  <span className="icon">📨</span> Mensajes
                  </button>
                </div>
              </div>
              

            {/* Grid de tarjetas */}
            <div className="dashboard-grid">
              
              {/* Información Personal */}
              <section className="dashboard-card wide">
                <div className="card-header">
                  <h3 className="card-title">
                    <span className="card-icon">👤</span>
                    Información Personal
                  </h3>
                  <button 
                    className="card-action"
                    onClick={ handleEditarGuardar }>
                      {isEditing ? "💾 Hecho" : "✏️ Editar"}
                  </button>
                </div>
                <div className="card-content">
                  <div className="info-grid">
                    
                  <InfoItem 
                  label="Email" 
                  value={email}
                  tipo='text'
                  isEditable={false}
                />
                
                <InfoItem 
                  label="Nombre"
                  value={localNombre}
                  type='text'
                  isEditable={isEditing}
                  onChange={(value) => setLocalNombre(value)}
                />
                
                <InfoItem 
                  label="Primer Apellido"
                  value={localApellido1}
                  type='text'
                  isEditable={isEditing}
                  onChange={(value) => setLocalApellido1(value)}
                />
                
                <InfoItem 
                  label="Segundo Apellido"
                  value={localApellido2}
                  type='text'
                  isEditable={isEditing}
                  onChange={(value) => setLocalApellido2(value)}
                />
                
                <InfoItem 
                  label="Fecha de nacimiento"
                  value={localFechaNacimiento}
                  type='date'
                  isEditable={isEditing}
                  onChange={(value) => setLocalFechaNacimiento(value)}
                />
                
                <InfoItem 
                  label="Antigüedad"
                  type='date'
                  value={localFechaAntiguedad}
                  isEditable={isEditing}
                  onChange={(value) => setLocalFechaAntiguedad(value)}
                />

                    <SelectInput 
                      label="Departamento"
                      value={localDepartamento}
                      options={['TI', 'Ventas', 'Recursos Humanos']}
                      onChange={(e) => setLocalDepartamento(e.target.value)}
                    />
                    <SelectInput 
                      label="Puesto"
                      value={localPuesto}
                      options={['Manager', 'Asesor', 'Desarrollador']}
                      onChange={(e) => setLocalPuesto(e.target.value)}
                    />

                  <button 
                    className="save-btn"
                    disabled={isEditing}
                    onClick={ handleGuardarUsuario }>
                      💾 Guardar Cambios
                    </button>
                  </div>
                </div>
              </section>

              {/* Héroe Corporativo */}
              <section className="dashboard-card hero">
                <div className="card-header">
                  <h3 className="card-title">
                    <span className="card-icon">🦸</span>
                    Héroe
                  </h3>
                </div>
                <div className="card-content">
                  <div className="hero-container">
                  <SelectInput 
                      label="Heroe"
                      value={localHeroe}
                      options={['Hulk', 'Iron Man', 'Capitán América']}
                      onChange={(e) => setLocalHeroe(e.target.value)}
                    />
                    <div className="hero-preview">
                      <img 
                        src={heroImages[heroe]} 
                        alt={heroe} 
                        className="hero-image"
                      />
                      <div className="hero-details">
                        <p className="hero-description">
                          Motivo de elección de héroe:
                        </p>
                        <textarea 
                          className="hero-input"
                          value={localMotivoHeroe}
                          onChange={(e) => setLocalMotivoHeroe(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="hero-actions">
                      <button 
                        className="hero-btn outline"
                        onClick={() => handleNavigate('/misiones')}>
                        📋 Misiones
                      </button>
                      
                      <button 
                        className="hero-btn primary" 
                        disabled={isEditing}
                        onClick={ handleGuardarNuevoHeroe }>
                        💾 Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Componentes auxiliares
  const InfoItem = ({ label, value, type, isEditable = false, onChange }) => (
    <div className="info-item">
      <div className="info-label">{label}</div>
      {isEditable ? (
        <input
          type={type}
          className="info-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <div className="info-value">{value}</div>
      )}
    </div>
  );

  const SelectInput = ({ label, value, options, onChange }) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <select className="form-select" value={value || ''} onChange={onChange}>
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