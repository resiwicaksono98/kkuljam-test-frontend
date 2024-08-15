import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import DetailPokemon from "./views/DetailPokemon";
import MyPokemon from "./views/MyPokemon";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";


function App() {
  const isLoading = useSelector(state => state.loader.isLoading )
  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:id" element={<DetailPokemon />} />
        <Route path="/my-pokemon" element={<MyPokemon />} />
      </Routes>
    </>
  );
}

export default App;
