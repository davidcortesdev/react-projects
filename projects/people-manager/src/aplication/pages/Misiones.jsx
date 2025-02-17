/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { asignarMisionSiNoExiste, subscribeMisiones, toggleMisionFinishedThunk } from '../../store/misiones/thunks';
import { useSelector } from 'react-redux';
import { Navegador } from '../ui/nav/Navegador';
import '../ui/Menu.css';

export const Misiones = () => {
  // Extraemos datos del usuario desde el store
  const { uid, nombre, apellido1 } = useSelector(state => state.auth);

  // Estado para almacenar las misiones y la pestaña activa
  const [misiones, setMisiones] = useState([]);
  // Pestaña por defecto: mostrar las misiones no finalizadas
  const [activeTab, setActiveTab] = useState('incomplete');

  // Array de misiones disponibles (puedes obtenerlo de una API o definirlo aquí)
  const misionesDisponibles = [
    {
      title: "Misión 1: Completar el reporte semanal",
      description: "Revisa los datos y envía el reporte a tu supervisor."
    },
    {
      title: "Misión 2: Actualizar la base de datos",
      description: "Verifica la información y actualiza los registros pertinentes."
    },
    {
      title: "Misión 3: Organizar la reunión de equipo",
      description: "Agenda y prepara la sala de reuniones para la junta."
    }
  ];

  // Asignar una misión al iniciar sesión, si no existe para hoy
  useEffect(() => {
    if (uid) {
      asignarMisionSiNoExiste(uid, misionesDisponibles);
    }
  }, [uid]);

  // Suscribirse en tiempo real a las misiones asignadas al usuario
  useEffect(() => {
    if (!uid) return;
    const unsubscribe = subscribeMisiones(uid, setMisiones);
    return () => unsubscribe();
  }, [uid]);

  // Función para alternar el estado de finalización de una misión
  const toggleMisionFinished = async (id, currentState) => {
    await toggleMisionFinishedThunk(id, currentState);
  };

  // Filtrado de misiones según la pestaña activa
  const filteredMisiones = misiones.filter(mision => {
    if (activeTab === 'all') return true;
    if (activeTab === 'incomplete') return !mision.estado;
    if (activeTab === 'completed') return mision.estado;
    return true;
  });

  return (
    <div className="dashboard">
      {/* Navegador integrado */}
      <Navegador nombre={nombre} apellido1={apellido1} />

      <div className="dashboard-wrapper">
        <div className="dashboard-content">
          <h1>Misiones</h1>
          {/* Pestañas para filtrar misiones */}
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Todas
            </button>
            <button 
              className={`tab-btn ${activeTab === 'incomplete' ? 'active' : ''}`}
              onClick={() => setActiveTab('incomplete')}
            >
              No Finalizadas
            </button>
            <button 
              className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Finalizadas
            </button>
          </div>

          {/* Grid de misiones */}
          <div className="dashboard-grid">
            {filteredMisiones.map(mision => (
              <div 
                key={mision.id} 
                className={`dashboard-card mission-card ${mision.estado ? "finished" : ""}`}
              >
                <div className="card-header">
                  <h3 className="card-title">{mision.title}</h3>
                </div>
                <div className="card-content">
                  <p>{mision.description}</p>
                  {mision.fechaAsignacion && (
                    <p className="mision-date">
                      Asignada: {new Date(mision.fechaAsignacion.seconds * 1000).toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="card-actions" style={{ marginTop: '1rem' }}>
                  <button 
                    className="save-btn" 
                    onClick={() => toggleMisionFinished(mision.id, mision.estado)}
                  >
                    {mision.estado ? "Reabrir Misión" : "Finalizar Misión"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
