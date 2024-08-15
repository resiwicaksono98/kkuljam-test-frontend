import { useMutation } from "@tanstack/react-query";
import { axiosInstanceMyServer } from "../../lib/axios";
import toast from "react-hot-toast";

export const useRenamePokemon = () => {
  return useMutation({
    mutationFn: async (pokemonId) => {
      const res = await axiosInstanceMyServer.post(`pokemons/${pokemonId}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Nickname renamed successfully!");
    },

    onError: () => {
      toast.error("Upss, Failed rename nickname!");
    }
  });
};
