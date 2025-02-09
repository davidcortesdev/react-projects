import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state, /* action */) => {
      state.isLoading = true
    },
    setPokemon: (state, action) => {
        state.isLoading = false
        state.page = action.payload.page
        state.pokemons = action.payload.pokemons
      },
  },
})


export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions