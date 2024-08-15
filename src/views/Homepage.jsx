import Card from "../components/Card";
import Header from "../components/Header";
import { useFetchPokemon } from "../hooks/pokemon/useFetchPokemon";
import { useFetchPokemonDetails } from "../hooks/pokemon/useFetchPokemonDetails";

export default function Homepage() {
  const { data: pokemons, isLoading: loadingFetchPokemon } = useFetchPokemon();

  const { data: pokemonDetails, isLoading:loadingPokemonDetails } = useFetchPokemonDetails({
    pokemons,
    enabled: !loadingFetchPokemon
  });

  return (
    <div className="mx-12 my-8">
      <Header title="Pokemon List" />

      <div className=" mt-12 grid lg:grid-cols-4 gap-4">
        {loadingPokemonDetails || loadingFetchPokemon
          ?
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
          : pokemonDetails?.map((pokemon, i) => (
              <Card key={i} pokemonData={pokemon.data} />
            ))}
      </div>
    </div>
  );
}
