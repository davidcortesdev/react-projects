import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";
import { startLogin } from "../../store/auth/thunks";

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLogin({ email, password }));
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
        />

        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
        />

        <div style={{ marginTop: '8px', display: errorMessage ? 'block' : 'none' }}>
          <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '8px', borderRadius: '4px', border: '1px solid red' }}>
            {errorMessage}
          </p>
        </div>

        <button type="submit" disabled={isAuthenticating}>
          Iniciar Sesión
        </button>
      </form>


      <p>
        ¿No tienes cuenta? <a href="/auth/register">Regístrate aquí</a>
      </p>
    </AuthLayout>
  );
};