import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export const useFetchPokemon = () => {
  return useQuery({
    queryFn: async () => {
      const pokemonResponse = await axiosInstance.get("pokemon");
      return pokemonResponse.data.results;
    },
    queryKey: ["fetch.pokemon"]
  });
};
