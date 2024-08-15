import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: null,
  createNickname: false
};

export const pokemonSlice = createSlice({
  name: "cathPokemonSlice",
  initialState,
  reducers: {
    pokemonSave: (state, action) => {
      state.pokemon = action.payload;
    },
    toggleCreateNickname: (state) => {
      state.createNickname = !state.createNickname;
    }
  }
});

export const { pokemonSave,toggleCreateNickname } = pokemonSlice.actions;

export default pokemonSlice.reducer;
