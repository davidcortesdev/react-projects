/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUser } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";
import { useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";


const formData = {
  email: '',
  nombre: '',
  apellido1: '',
  apellido2: '',
  fechaNacimiento: '',
  fechaAntiguedad: '',
  departamento: 'TI',
  puesto: 'Manager',
  password: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe contener una "@" y ser válido.'],
  nombre: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
  apellido1: [(value) => value.length >= 3, 'El primer apellido debe contener al menos 3 caracteres.'],
  apellido2: [(value) => value.length >= 3, 'El segundo apellido debe contener al menos 3 caracteres.'],
  fechaNacimiento: [
    (value) => /^\d{4}-\d{2}-\d{2}$/.test(value), 'La fecha de nacimiento debe estar en formato YYYY-MM-DD.'
  ],
  fechaAntiguedad: [
    (value) => /^\d{4}-\d{2}-\d{2}$/.test(value), 'La fecha de antigüedad debe estar en formato YYYY-MM-DD.'
  ],
  password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres.'],
};

export const RegisterPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth)
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])

  const { 
    email, nombre, apellido1, apellido2, fechaNacimiento, fechaAntiguedad,
    departamento, puesto, password, onInputChange, isFormValid, 
    emailValid, nombreValid, apellido1Valid, apellido2Valid, fechaNacimientoValid,
    fechaAntiguedadValid, passwordValid, formState
  } = useForm(formData, formValidations)


  const onSubmit = ( event ) => {
    event.preventDefault()
    setFormSubmitted(true)

    if( !isFormValid ) return

    dispatch( startCreatingUser({ ...formState, navigate }) )

    navigate('/selecthero');
    
  }



  return (
    <AuthLayout>
      <h1>Crear Cuenta</h1>
        
      <form className="register-form" onSubmit={ onSubmit }>
      
        <div className="form-group">
          <input 
            id="email"
            type="email" 
            placeholder="correo@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
          />
          {formSubmitted && emailValid && <span className="error-message">{emailValid}</span>}
        </div>
        
        <div className="form-group">
          <input 
            id="nombre"
            type="text" 
            placeholder="Nombre"
            name="nombre"
            value={ nombre }
            onChange={ onInputChange }
          />
          {formSubmitted && nombreValid && <span className="error-message">{nombreValid}</span>}
        </div>

        <div className="form-group">
          <input 
            id="apellido1"
            type="text" 
            placeholder="Primer apellido"
            name="apellido1"
            value={ apellido1 }
            onChange={ onInputChange }
            aria-label={ !!apellido1Valid && formSubmitted }
            aria-describedby={ apellido1Valid ? 'email-helper-text' : undefined } />
        </div>

        <div className="form-group">
          <input 
            id="apellido2"
            type="text" 
            placeholder="Segundo apellido"
            name="apellido2"
            value={ apellido2 }
            onChange={ onInputChange }
            aria-label={ !!apellido2Valid && formSubmitted }
            aria-describedby={ apellido2Valid ? 'email-helper-text' : undefined } />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento"
                  style={{ display: "flex", color: "gray", marginTop: "8px" }}>
                  Fecha de Nacimiento:
          </label>
          <input 
            id="fechaNacimiento"
            type="date" 
            placeholder="Fecha de nacimiento (YYYY-MM-DD)"
            name="fechaNacimiento"
            value={ fechaNacimiento }
            onChange={ onInputChange }
            title="Seleccione su fecha de nacimiento"
            aria-label="Fecha de Nacimiento"
            style={{ margin: "0px", marginBottom: "8px"}}
          />
          {formSubmitted && fechaNacimientoValid && <span className="error-message">{fechaNacimientoValid}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento"
                  style={{ display: "flex", color: "gray", margin: "0px", marginTop: "8px", }}>
                  Fecha de Antigüedad:
          </label>
          <input 
            id="fechaAntiguedad"
            type="date" 
            placeholder="Fecha de ingreso a la empresa (YYYY-MM-DD)"
            name="fechaAntiguedad"
            value={ fechaAntiguedad }
            onChange={ onInputChange }
            title="Seleccione su fecha de ingreso a la empresa"
            aria-label="Fecha de Antigüedad"
            style={{ margin: "0px", marginBottom: "8px"}}
          />
          {formSubmitted && fechaAntiguedadValid && <span className="error-message">{fechaAntiguedadValid}</span>}
        </div>

        <div className="form-group">
          <SelectInput 
            name='departamento'
            value={departamento}
            options={['TI', 'Ventas', 'Recursos Humanos']}
            onChange={ onInputChange }
          />
        </div>

        <div className="form-group">
          <SelectInput 
            name='puesto'
            value={puesto}
            options={['Manager', 'Asesor', 'Desarrollador']}
            onChange={ onInputChange }
          />
        </div>

        <div className="form-group">
          <input 
            id="password"
            type="password" 
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
          />
          {formSubmitted && passwordValid && <span className="error-message">{passwordValid}</span>}
        </div>
        

        <div style={{ marginTop: '8px', display: errorMessage ? 'block' : 'none' }}>
          <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '8px', borderRadius: '4px', border: '1px solid red' }}>
            {errorMessage}
          </p>
        </div>

        <button 
          type="submit"
          disabled={ isCheckingAuthentication }>
            Registar
        </button>
        
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/auth/login">Inicia sesión aquí</Link>
      </p>
    </AuthLayout>
  );
};


const SelectInput = ({ name, value, options, onChange }) => (
  <div className="form-group">
    <select name={name} className="form-select1" value={value} onChange={onChange}>
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