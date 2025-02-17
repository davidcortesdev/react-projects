/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUser } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";
import { useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

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
  email: [ (value) => value.includes('@') , 'El correo debe de tener una @.'],
  nombre: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
  apellido1: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
  apellido2: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
  fechaNacimiento: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
  fechaAntiguedad: [(value) => value.length >= 3, 'El nombre debe contener al menos 3 caracteres.'],
  password: [ (value) => value.length >= 6 , 'La contraseña debe tener mas de 6 caracteres.'],
}

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
    
  }



  return (
    <AuthLayout>
      <h1>Crear Cuenta</h1>
        
        <input 
          type="email" 
          placeholder="correo@google.com"
          name="email"
          value={ email }
          onChange={ onInputChange }
          aria-label={ !!emailValid && formSubmitted }
          aria-describedby={ emailValid ? 'email-helper-text' : undefined } />
      

      <form className="register-form" onSubmit={ onSubmit }>
        <input 
          type="text" 
          placeholder="Nombre"
          name="nombre"
          value={ nombre }
          onChange={ onInputChange }
          aria-label={ !!nombreValid && formSubmitted }
          aria-describedby={ nombreValid ? 'displayName-helper-text' : undefined } />


        <input 
          type="text" 
          placeholder="Primer apellido"
          name="apellido1"
          value={ apellido1 }
          onChange={ onInputChange }
          aria-label={ !!apellido1Valid && formSubmitted }
          aria-describedby={ apellido1Valid ? 'email-helper-text' : undefined } />


        <input 
          type="text" 
          placeholder="Segundo apellido"
          name="apellido2"
          value={ apellido2 }
          onChange={ onInputChange }
          aria-label={ !!apellido2Valid && formSubmitted }
          aria-describedby={ apellido2Valid ? 'email-helper-text' : undefined } />


        <input 
          type="date" 
          placeholder="Fecha Nacimiento"
          name="fechaNacimiento"
          value={ fechaNacimiento }
          onChange={ onInputChange }
          aria-label={ !!fechaNacimientoValid && formSubmitted }
          aria-describedby={ fechaNacimientoValid ? 'email-helper-text' : undefined } />
        

        <input 
          type="date" 
          placeholder="Fecha Antiguead"
          name="fechaAntiguedad"
          value={ fechaAntiguedad }
          onChange={ onInputChange }
          aria-label={ !!fechaAntiguedadValid && formSubmitted }
          aria-describedby={ fechaAntiguedadValid ? 'email-helper-text' : undefined } />


        <SelectInput 
          name='departamento'
          value={departamento}
          options={['TI', 'Ventas', 'Recursos Humanos']}
          onChange={ onInputChange }
        />

        <SelectInput 
          name='puesto'
          value={puesto}
          options={['Manager', 'Asesor', 'Desarrollador']}
          onChange={ onInputChange }
        />


        <input 
          type="password" 
          placeholder="Contraseña"
          name="password"
          value={ password }
          onChange={ onInputChange }
          aria-label={ !!passwordValid && formSubmitted }
          aria-describedby={ passwordValid ? 'password-helper-text' : undefined } />
        

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
        ¿Ya tienes cuenta? <a href="/auth/login">Inicia sesión aquí</a>
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