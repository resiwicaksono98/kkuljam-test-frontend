import { useMutation } from "@tanstack/react-query";
import { axiosInstanceMyServer } from "../../lib/axios";
import toast from "react-hot-toast";

export const useReleasePokemon = () => {
  return useMutation({
    mutationFn: async (pokemonId) => {
      const res = await axiosInstanceMyServer.delete(`pokemons/${pokemonId}`);
      return res.data;
    },
    onSuccess: ({ data }) => {
      toast.success(
        `Prime Number = ${data?.primeNumber}, Pokemon Released Successfully!`
      );
    },
    onError: () => {
      toast.error(`Not Prima Number, Failed release pokemon!`);
    }
  });
};
