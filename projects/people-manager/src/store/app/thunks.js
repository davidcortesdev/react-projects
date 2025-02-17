import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { nuevoMensaje, setEmpleados, setMensajes } from "./appSlice";
import { FirebaseDB } from "../../firebase/config"


export const getMensajes = (userId) => {
  return async (dispatch) => {
    try {
      const queryMensajes = query(
        collection(FirebaseDB, 'mensajes'),
        where('receptorId', '==', userId),
        orderBy('fechaMensaje', 'asc')
      );
      const querySnapshot = await getDocs(queryMensajes);
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });

      dispatch(setMensajes(messages));
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
  }
}



export const enviarMensaje = ({emisorId, emisorEmail, receptorId, texto, fechaMensaje}) => {
  return async (dispatch) => {
    try {
      const mensaje = {
        emisorId,
        emisorEmail,
        receptorId,
        texto,
        fechaMensaje,
      };
      const docRef = await addDoc(collection(FirebaseDB, 'mensajes'), mensaje);
      dispatch(nuevoMensaje({ id: docRef.id, ...mensaje }));
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  }
}



export const getEmpleados = () => {
  return async (dispatch) => {
    try {
      const queryEmpleados = query(
        collection(FirebaseDB, 'users'),
        orderBy('nombre', 'asc')
      );
      const querySnapshot = await getDocs(queryEmpleados);
      const empleados = [];
      querySnapshot.forEach((doc) => {
        empleados.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setEmpleados(empleados));
    } catch (error) {
      console.error('Error al obtener empleados:', error);
    }
  }
}