import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export const useFetchPokemonDetails = ({pokemons, enabled}) => {
    return useQuery({
        queryKey: ['fetch.pokemon.details'],
        queryFn: () => Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url))),
        enabled
      });
  };
