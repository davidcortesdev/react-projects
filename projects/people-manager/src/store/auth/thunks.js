import { checkingCredentials, login, logout, updateApellido1, updateApellido2, updateDepartamento, updatefechaAntiguedad, updatefechaNacimiento, updateHeroe, updateMotivoHeroe, updateNombre, updatePuesto } from './authSlice'
import { loginUser, logoutFirebase, registerUser } from '../../firebase/providers'
import { FirebaseAuth, FirebaseDB } from '../../firebase/config'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { persistor } from '../store'


export const startCreatingUser = ({ email, password, nombre, apellido1, apellido2, 
    fechaNacimiento, fechaAntiguedad, departamento, puesto }) => {
    return async (dispatch) => {

        dispatch( checkingCredentials() )

        const { ok, uid, errorMessage } = await registerUser({ email, password, nombre })

        if( !ok ) return dispatch( logout( { errorMessage } ))

        await setDoc(doc(FirebaseDB, "users", uid), {
            email, nombre, apellido1, apellido2, fechaNacimiento, fechaAntiguedad,
            departamento, puesto, heroe: null, motivoHeroe: null, uid,
        });

        dispatch( login({ uid, email, nombre, apellido1, apellido2, fechaNacimiento, 
                          fechaAntiguedad, departamento, puesto }))

    }
}



export const startLogin = ({ email, password, navigate }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginUser({ email, password });

    if (!result.ok) {
      return dispatch(logout(result));
    }

    const datosUsuarios = await getDatosUsuario();

    if (datosUsuarios) {
      dispatch(login(datosUsuarios));
      navigate('/menu');
    } else {
      dispatch(logout({ errorMessage: 'No se encontró el usuario en la base de datos' }));
    }
  };
};



export const startLogout = ({ navigate }) => {
  return async (dispatch) => {
    try {
      const { ok, errorMessage } = await logoutFirebase();
      
      if (!ok) throw new Error(errorMessage);

      dispatch(logout());

      persistor.purge();
      localStorage.clear();

      navigate("/auth/login");
    } catch (error) {
      console.error("Error en startLogout:", error);
    }
  };
};



export async function getDatosUsuario() {
  const userId = FirebaseAuth.currentUser?.uid;

  if (userId) {
    const userRef = doc(FirebaseDB, "users", userId);
    try {
      const docUsuarios = await getDoc(userRef);
      if (docUsuarios.exists()) {
        console.log("Datos del usuario:", docUsuarios.data());
        return docUsuarios.data();
      } else {
        console.log("El usuario no existe en Firestore.");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      return null;
    }
  } else {
    console.log("No hay usuario autenticado.");
    return null;
  }
}



export async function updateHeroeYMotivo(userId, heroe, motivoHeroe) {
  const userDocRef = doc(FirebaseDB, 'users', userId);
  await updateDoc(userDocRef, { heroe, motivoHeroe });
}



export const startUpdateHeroe = (userId, heroe, motivoHeroe) => {
    return async (dispatch) => {
      try {
        await updateHeroeYMotivo(userId, heroe, motivoHeroe);

        dispatch(updateHeroe(heroe))
        dispatch(updateMotivoHeroe(motivoHeroe))

      } catch (error) {
        console.error('Error al actualizar el héroe:', error);
      }
    }
  }



  export async function actualizarUsuario(userId, nombre, apellido1, apellido2, fechaNacimiento,fechaAntiguedad, departamento, puesto) {
    const userDocRef = doc(FirebaseDB, 'users', userId);
    await updateDoc(userDocRef, { nombre, apellido1, apellido2, fechaNacimiento,fechaAntiguedad, departamento, puesto });
  }


  export const startActualizarUsuario = (userId, nombre, apellido1, apellido2, fechaNacimiento, fechaAntiguedad, departamento, puesto, heroe, motivoHeroe) => {
    return async (dispatch) => {
      try {
        await actualizarUsuario(userId, nombre, apellido1, apellido2, fechaNacimiento, fechaAntiguedad, departamento, puesto, heroe, motivoHeroe);
  
        dispatch(updateNombre(nombre));
        dispatch(updateApellido1(apellido1));
        dispatch(updateApellido2(apellido2));
        dispatch(updatefechaNacimiento(fechaNacimiento));
        dispatch(updatefechaAntiguedad(fechaAntiguedad));
        dispatch(updateDepartamento(departamento));
        dispatch(updatePuesto(puesto));
        dispatch(updateHeroe(heroe));
        dispatch(updateMotivoHeroe(motivoHeroe));
  
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
      }
    };
  };
