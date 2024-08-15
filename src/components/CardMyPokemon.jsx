/* eslint-disable react/prop-types */

import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import { useReleasePokemon } from "../hooks/pokemon/useReleasePokemon";
import { useEffect } from "react";
import { useRenamePokemon } from "../hooks/pokemon/useRenamePokemon";

function CardMyPokemon({ pokemonData, refetchPokemon }) {
  const [confirmDialog, setConfirmDialog] = useState(false);

  const { mutate: releasePokemon, isSuccess: releasePokemonSuccess } =
    useReleasePokemon();

  const { mutate: renamePokemon, isSuccess: renameSuccess } =
    useRenamePokemon();

  useEffect(() => {
    if (releasePokemonSuccess) {
      refetchPokemon(true);
      setConfirmDialog(false);
    }

    if (renameSuccess) {
      refetchPokemon(true);
    }
  }, [releasePokemonSuccess, refetchPokemon, renameSuccess]);
  return (
    <div className="border p-4 rounded-xl">
      <img src={pokemonData.profileUrl} alt="pokemon" className="h-40 w-full" />
      <div className="mt-4 text-center font-semibold text-2xl">
        {pokemonData?.name}
      </div>
      <div className="mt-2 text-center text-sm font-medium">
        Nickname : {pokemonData.nickname}
      </div>
      <div className="flex items-center justify-around mt-6">
        <button
          onClick={() => renamePokemon(pokemonData.id)}
          className="bg-blue-500 py-1 px-3 rounded-md hover:bg-blue-600 text-white"
        >
          Rename
        </button>
        <button
          className="bg-red-500 py-1 px-3 rounded-md hover:bg-red-600 text-white"
          onClick={() => releasePokemon(pokemonData.id)}
        >
          Release
        </button>
      </div>
      {confirmDialog ? (
        <ConfirmDialog
          title={"Release Pokemon"}
          message={"Are you sure release the pokemon?"}
          onCancel={() => setConfirmDialog(false)}
        />
      ) : null}
    </div>
  );
}

export default CardMyPokemon;
