import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', //checking, not-authenticated, authenticated
    email: null,
    nombre: null,
    apellido1: null,
    apellido2: null,
    fechaNacimiento: null,
    fechaAntiguedad: null,
    departamento: null,
    puesto: null,
    errorMessage: null,
  },
  
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated',
      state.email = payload.email,
      state.nombre = payload.nombre,
      state.apellido1 = payload.apellido1,
      state.apellido2 = payload.apellido2,
      state.fechaNacimiento = payload.fechaNacimiento,
      state.fechaAntiguedad = payload.fechaAntiguedad,
      state.departamento = payload.departamento,
      state.puesto = payload.puesto,
      state.errorMessage = null
    },

    logout: (state, { payload }) => {
      state.status = 'not-authenticated',
      state.email = null,
      state.nombre = null,
      state.apellido1 = null,
      state.apellido2 = null,
      state.fechaNacimiento = null,
      state.fechaAntiguedad = null,
      state.departamento = null,
      state.puesto = null,
      state.errorMessage = payload?.errorMessage
    },

    checkingCredentials: (state) => {
        state.status = 'checking'
    },
  },
})


export const { login, logout, checkingCredentials } = authSlice.actions