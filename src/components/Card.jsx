/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ pokemonData }) {
  return (
    <Link to={`/pokemon/${pokemonData.id}`} reloadDocument >
      <div className="border p-4 rounded-xl hover:bg-slate-100 cursor-pointer">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt="pokemon"
          className="h-40 w-full"
        />
        <div className="mt-4 text-center font-semibold text-2xl">
          {pokemonData?.name}
        </div>
      </div>
    </Link>
  );
}


export default Card;
