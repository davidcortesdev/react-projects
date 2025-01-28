import { createSlice } from '@reduxjs/toolkit'


export const appSlice = createSlice({
  name: 'app',
  initialState: {
  },
  reducers: {
    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.active = null
      state.notes = []
    },

    deleteNoteById: (state, action) => {
      state.active = null
      state.notes = state.notes.filter( note => note.id !== action.payload )
    },
  },
})


export const { deleteNoteById, clearNotesLogout } = appSlice.actions