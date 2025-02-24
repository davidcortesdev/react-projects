import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    uid: null,
    email: null,
    nombre: null,
    apellido1: null,
    apellido2: null,
    fechaNacimiento: null,
    fechaAntiguedad: null,
    departamento: null,
    puesto: null,
    heroe: null,
    motivoHeroe: null,
    errorMessage: null,
  },
  
  reducers: {
    login: (state, {payload} ) => {
      state.status = 'authenticated',
      state.uid = payload.uid,
      state.email = payload.email,
      state.nombre = payload.nombre,
      state.apellido1 = payload.apellido1,
      state.apellido2 = payload.apellido2,
      state.fechaNacimiento = payload.fechaNacimiento?.toDate().toISOString() || null,
      state.fechaAntiguedad = payload.fechaAntiguedad?.toDate().toISOString() || null,
      state.departamento = payload.departamento,
      state.puesto = payload.puesto,
      state.heroe = payload.heroe,
      state.motivoHeroe = payload.motivoHeroe,
      state.errorMessage = null
    },

    logout: (state, { payload }) => {
      state.status = 'not-authenticated',
      state.uid = null,
      state.email = null,
      state.nombre = null,
      state.apellido1 = null,
      state.apellido2 = null,
      state.fechaNacimiento = null,
      state.fechaAntiguedad = null,
      state.departamento = null,
      state.puesto = null,
      state.heroe = null,
      state.motivoHeroe = null,
      state.errorMessage = payload?.errorMessage
    },

    updateNombre: (state, action) => {
      state.nombre = action.payload
    },

    updateApellido1: (state, action) => {
      state.apellido1 = action.payload
    },

    updateApellido2: (state, action) => {
      state.apellido2 = action.payload
    },

    updatefechaNacimiento: (state, action) => {
      state.fechaNacimiento = action.payload
    },

    updatefechaAntiguedad: (state, action) => {
      state.fechaAntiguedad = action.payload
    },

    updateDepartamento: (state, action) => {
      state.departamento = action.payload;
    },

    updatePuesto: (state, action) => {
      state.puesto = action.payload;
    },

    updateHeroe: (state, action) => {
      state.heroe = action.payload;
    },

    updateMotivoHeroe: (state, action) => {
      state.motivoHeroe = action.payload;
    },

    checkingCredentials: (state) => {
        state.status = 'checking'
    },
  },
})


export const { 
  login, logout, checkingCredentials, setUser, updateDepartamento, updatePuesto, 
  updateNombre, updateApellido1, updateApellido2, updatefechaNacimiento, updatefechaAntiguedad, 
  updateHeroe, updateMotivoHeroe } = authSlice.actions