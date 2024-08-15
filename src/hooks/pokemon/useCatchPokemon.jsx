import { useMutation } from "@tanstack/react-query";
import { axiosInstanceMyServer } from "../../lib/axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../features/loader/loaderSlice";
import { pokemonSave, toggleCreateNickname } from "../../features/pokemon/pokemonSlice";

export const useCatchPokemon = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (pokemon) => {
      const res = await axiosInstanceMyServer.post("pokemons", {
        pokemonId: pokemon.pokemonId,
        name: pokemon.name,
        profileUrl: pokemon.profileUrl
      });
      return res.data;
    },
    onSuccess: ({data}) => {
      dispatch(showLoader());
      setTimeout(() => {
        dispatch(pokemonSave(data));
        dispatch(toggleCreateNickname())
        toast.success("Catch pokemon success!");
        dispatch(hideLoader());
      }, 3000);
    },
    onError: () => {
      dispatch(showLoader());
      setTimeout(() => {
        toast.error("Upss, Catch pokemon failed!");
        dispatch(hideLoader());
      }, 3000);
    }
  });
};
