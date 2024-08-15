import { useQuery } from "@tanstack/react-query";
import {axiosInstance} from "../../lib/axios";

export const useFetchSinglePokemon = (id) => {
  return useQuery({
    queryFn: async () => {
      const pokemonResponse = await axiosInstance.get(`pokemon/${id}`);
      return pokemonResponse.data;
    },
    queryKey: ["fetch.pokemon.single"],

  });
};
