import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";
import { startLogin } from "../../store/auth/thunks";
import { useNavigate, Link } from "react-router-dom";

const formData = {
  email: 'admin@gmail.com',
  password: 'admin123',
};

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    
    if (email.trim() === '' || password.trim() === '') {
      alert("Por favor, completa todos los campos.");
      return;
    }

    dispatch(startLogin({ email, password, navigate }));
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>

        <input
          type="email"
          placeholder="correo@google.com"
          name="email"
          value={email}
          onChange={onInputChange}
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
          autoComplete="current-password"
        />

        {/* Mostrar mensaje de error si existe */}
        {errorMessage && (
          <div style={{ marginTop: '8px' }}>
            <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '8px', borderRadius: '4px', border: '1px solid red' }}>
              {errorMessage}
            </p>
          </div>
        )}

        <button type="submit" disabled={isAuthenticating}>
          {isAuthenticating ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>

      <p>
        ¿No tienes cuenta? <Link to="/auth/register">Regístrate aquí</Link>
      </p>
    </AuthLayout>
  );
};
