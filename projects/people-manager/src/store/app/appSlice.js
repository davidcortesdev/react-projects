import { createSlice } from '@reduxjs/toolkit'


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    mensajes: [],
    empleados: []
  },
  reducers: {
    // Reemplaza el array de mensajes
    setMensajes: (state, action) => {
      state.mensajes = action.payload;
    },
    // Agrega un mensaje al array
    nuevoMensaje: (state, action) => {
      state.mensajes.push(action.payload);
    },
    // Borra un mensaje filtrando por id
    borrarMensaje: (state, action) => {
      state.mensajes = state.mensajes.filter(mensaje => mensaje.id !== action.payload);
    },
    // Guarda la lista de empleados
    setEmpleados: (state, action) => {
      state.empleados = action.payload;
    }
  },
});



export const { setMensajes, nuevoMensaje, borrarMensaje, setEmpleados } = appSlice.actions