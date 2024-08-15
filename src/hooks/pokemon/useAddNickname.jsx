import { useMutation } from "@tanstack/react-query";
import { axiosInstanceMyServer } from "../../lib/axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { toggleCreateNickname } from "../../features/pokemon/pokemonSlice";

export const useAddNickname = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async ({ pokemonId, nickname }) => {
      const res = await axiosInstanceMyServer.put(
        `pokemons/${pokemonId}/update-nickname`,
        {
          nickname: nickname
        }
      );
      return res.data;
    },
    onSuccess: () => {
      dispatch(toggleCreateNickname());
      toast.success("The Pokemon added in your deck!");
    },

    onError: () => {
      toast.error("Upss, Failed save nickname!");
    }
  });
};
