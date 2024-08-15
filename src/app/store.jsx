import { configureStore } from "@reduxjs/toolkit";
import  pokemonReducer from '../features/pokemon/pokemonSlice'
import loaderReducer from "../features/loader/loaderSlice"


export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    loader: loaderReducer
  }
})
