import { useContext } from "react";
import { Context } from "../context/PokemonContext";

const usePokemon = () => {
  const context = useContext(Context);

  return context;
};

export { usePokemon };
