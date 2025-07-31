/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navegador } from '../ui/nav/Navegador';
import { getMensajes, enviarMensaje, getEmpleados } from '../../store/app/thunks';
import { formatDate } from '../helpers/FormDate';
import '../ui/Menu.css';

export const ChatPage = () => {
  const dispatch = useDispatch();

  const { uid, email, nombre, apellido1 } = useSelector((state) => state.auth);
  const { mensajes, empleados } = useSelector((state) => state.app);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (uid) {
      dispatch(getMensajes(uid)); // Carga los mensajes al inicializar el componente
      dispatch(getEmpleados());
    }
  }, [uid]);

  useEffect(() => {
    if (!selectedEmployee && empleados.length > 0) {
      setSelectedEmployee(empleados[0].id);
    }
  }, [empleados, selectedEmployee]);

  const handleRefresh = () => {
    dispatch(getMensajes(uid));  // Actualiza los mensajes al hacer click en refrescar
  };

  const fechaFormateada = formatDate(Date.now());

  const handleEnviar = () => {
    if (newMessage.trim() === '' || !selectedEmployee) return;

    const mensaje = {
      emisorId: uid,
      emisorEmail: email,
      receptorId: selectedEmployee,
      texto: newMessage,
      fechaMensaje: fechaFormateada,
    };

    dispatch(enviarMensaje(mensaje)); // Enviar mensaje

    // Actualiza los mensajes de manera local, para evitar que se dupliquen
    const nuevoMensaje = { ...mensaje, id: Date.now() };  // Usar un ID único para el mensaje local
    dispatch({ type: 'app/addMensaje', payload: nuevoMensaje }); // Agrega el mensaje al estado local

    setNewMessage('');  // Limpia el campo de mensaje
  };

  return (
    <div className="dashboard">
      <Navegador nombre={nombre} apellido1={apellido1} />

      <div className="dashboard-wrapper">
        <div className="dashboard-content">
          <section className="dashboard-card wide">
            <div className="card-header">
              <h3 className="card-title">
                <span className="card-icon">💬</span> Mensajes
              </h3>
              <button className="card-action" onClick={handleRefresh}>
                🔄 Refrescar
              </button>
            </div>
            <div className="card-content">
              {/* Pantalla de mensajes */}
              <div className="chat-screen" style={{ maxHeight: '300px', overflowY: 'auto', padding: '1rem', background: 'var(--surface)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                {mensajes && mensajes.length > 0 ? (
                  mensajes.map((msg, index) => {
                    return (
                      <div
                        key={`${msg.id}-${index}`}  // Usamos una combinación de id y el índice para garantizar unicidad
                        style={{ marginBottom: '0.75rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}
                      >
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          De: {msg.emisorEmail} - {fechaFormateada}
                        </div>
                        <div style={{ fontSize: '1rem' }}>{msg.texto}</div>
                      </div>
                    );
                  })
                ) : (
                  <p>No hay mensajes</p>
                )}
              </div>

              {/* Controles del chat: selector, textarea y botón */}
              <div className="chat-controls" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Enviar a:</label>
                  <SelectInput
                    value={selectedEmployee}
                    options={empleados}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    className="hero-input"
                    placeholder="Escribe tu mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  className="hero-btn primary"
                  onClick={handleEnviar}
                  disabled={newMessage.trim() === ''}
                >
                  Enviar
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const SelectInput = ({ value, options, onChange }) => (
  <div className="form-group">
    <select className="form-select" value={value} onChange={onChange}>
      {options.map((emp) => (
        <option key={emp.id} value={emp.id} style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
          {emp.email}
        </option>
      ))}
    </select>
  </div>
);
