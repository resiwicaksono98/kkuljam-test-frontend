import CardMyPokemon from "../components/CardMyPokemon";
import Header from "../components/Header";
import { useFetchMyPokemon } from "../hooks/pokemon/useFetchMyPokemon";


function MyPokemon() {
  const { data: pokemons, isLoading: loadingFetchPokemon, refetch: refetchPokemon } =
    useFetchMyPokemon();

  return (
    <div className="mx-12 my-8">
      <Header title="My Pokemon" backUrl={"/"} />

      <div className=" mt-12 grid lg:grid-cols-4 gap-4">
        {loadingFetchPokemon
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse p-4 border rounded-lg shadow-lg"
              >
                <div className="h-32 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-md"></div>
              </div>
            ))
          : pokemons?.map((pokemon, i) => (
              <CardMyPokemon
                key={i}
                pokemonData={pokemon}
                refetchPokemon={refetchPokemon}
              />
            ))}
      </div>
    </div>
  );
}

export default MyPokemon;
