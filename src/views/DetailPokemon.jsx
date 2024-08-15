import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useFetchSinglePokemon } from "../hooks/pokemon/useFetchSinglePokemon";
import { useCatchPokemon } from "../hooks/pokemon/useCatchPokemon";
import { useState } from "react";
import { useAddNickname } from "../hooks/pokemon/useAddNickname";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function DetailPokemon() {
  const param = useParams();
  const [dialogNickname, setDialogNickname] = useState(false);
  const [nickname, setNickname] = useState("");

  const pokemonSelector = useSelector((state) => state?.pokemon);

  const { data: pokemon, isLoading } = useFetchSinglePokemon(param.id);

  const { mutate: catchPokemon } = useCatchPokemon();

  const { mutate: addNickname, isSuccess: addNicknameSuccess } =
    useAddNickname();

  async function catchPokemonHandle() {
    catchPokemon({
      pokemonId: pokemon?.id,
      name: pokemon?.name,
      profileUrl: pokemon?.sprites?.other?.dream_world?.front_default
    });
  }

  async function handleAddNickname(e) {
    e.preventDefault();

    addNickname({
      pokemonId: pokemonSelector.pokemon.id,
      nickname: nickname
    });
  }

  useEffect(() => {
    if (addNicknameSuccess) {
      setDialogNickname(false);
    }

    if (pokemonSelector.createNickname) {
      setDialogNickname(pokemonSelector.createNickname);
    }
  }, [pokemonSelector, addNicknameSuccess]);

  return (
    <>
      {isLoading ? (
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse p-4 border rounded-lg shadow-lg"
          >
            <div className="h-32 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-300 rounded-md"></div>
          </div>
        ))
      ) : (
        <div className="mx-4 lg:mx-12 my-8 bg-white border min-h-[90vh] rounded-lg p-4">
          <Header title="Detail Pokemon" backUrl={"/"} />
          <div className="mt-10 flex items-center justify-center w-full gap-12 lg:px-12 flex-wrap">
            <img
              className="h-48 lg:h-[500px] object-cover"
              src={pokemon?.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <div className="">
              <h2 className="text-3xl font-bold text-gray-800">
                {pokemon.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Experience: {pokemon.base_experience}
              </p>
              <p className="text-gray-600">Height: {pokemon.height} dm</p>
              <p className="text-gray-600">Weight: {pokemon.weight} hg</p>
              <div className="flex gap-12 justify-between">
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Move</h3>
                  <ul className="list-disc list-inside">
                    {pokemon.moves.slice(0, 4).map((move, index) => (
                      <li key={index} className="text-gray-600">
                        {move.move.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Types</h3>
                  <ul className="list-disc list-inside">
                    {pokemon.types.map((type, index) => (
                      <li key={index} className="text-gray-600">
                        {type.type.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={catchPokemonHandle}
                className="mt-12 bg-green-600 hover:bg-green-700 py-2 px-4 text-2xl text-white rounded-lg"
              >
                Catch The Pokemon
              </button>
              <div className="text-xs mt-2 italic">Probability 50%</div>
            </div>
          </div>
        </div>
      )}
      {/* Dialog nickname */}
      {dialogNickname && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <form className="bg-white p-6  w-[500px] shadow-md rounded-lg">
            <h1 className="mb-4 text-xl font-semibold">Berikan Nama</h1>
            <label
              htmlFor="nickname"
              className="block text-sm font-medium text-gray-700"
            >
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              onChange={(e) => setNickname(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              onClick={(e) => handleAddNickname(e)}
              className="bg-blue-500 py-2 px-4 text-white rounded mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default DetailPokemon;
