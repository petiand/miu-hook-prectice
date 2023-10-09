import { useContext } from "react";
import {Context} from "../components/PokemonContext";


const usePokemon = () => {
 const context = useContext(Context)

 return context
}

export {usePokemon}