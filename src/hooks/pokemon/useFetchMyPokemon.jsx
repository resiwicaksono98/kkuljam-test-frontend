import { useQuery } from "@tanstack/react-query";
import { axiosInstanceMyServer } from "../../lib/axios";

export const useFetchMyPokemon = () => {
  return useQuery({
    queryFn: async () => {
      const pokemonResponse = await axiosInstanceMyServer.get("pokemons");

      return pokemonResponse.data.data;
    },
    queryKey: ["fetch.pokemon.my-pokemon"]
  });
};
