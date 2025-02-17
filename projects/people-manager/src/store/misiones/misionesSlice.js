import { createSlice } from '@reduxjs/toolkit';


export const misionesSlice = createSlice({
  name: 'misiones',
  initialState: {
    misiones: [],
    loading: false,
    error: null,
  },
  
  reducers: {
    // Establece el listado completo de misiones
    setMisiones(state, action) {
      state.misiones = action.payload;
    },
    // Agrega una misión al listado
    addMision(state, action) {
      state.misiones.push(action.payload);
    },
    // Actualiza una misión existente (por ejemplo, para cambiar su estado)
    updateMision(state, action) {
      const index = state.misiones.findIndex(mision => mision.id === action.payload.id);
      if (index !== -1) {
        state.misiones[index] = action.payload;
      }
    },
    // Elimina una misión del listado
    removeMision(state, action) {
      state.misiones = state.misiones.filter(mision => mision.id !== action.payload);
    },
    // Opcional: para establecer el estado de carga (loading)
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // Opcional: para manejar errores
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setMisiones, addMision, updateMision, removeMision, setLoading, setError } = misionesSlice.actions;