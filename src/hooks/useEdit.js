import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useEdit = (pokemon) => {
  const localStorage = useLocalStorage();
  const editedPokemons = localStorage.getItem("edited") || [];

  const [currentEditedPokemon, setCurrentEditedPokemon] = useState(pokemon);
  const savedEditedPokemon = editedPokemons?.find(
    (item) => item.id === pokemon?.id
  );
  const usedForCheck = savedEditedPokemon || pokemon;

  const disable = Object.keys(currentEditedPokemon).some(
    (key) =>
      JSON.stringify(currentEditedPokemon[key]) !==
      JSON.stringify(usedForCheck[key])
  );

  const handelSubmitEdit = () => {
    if (disable) {
      if (savedEditedPokemon) {
        //if the pokemon was already edited once, save it only once
        const filtered = editedPokemons.filter(
          (item) => item.id !== savedEditedPokemon.id
        );
        localStorage.setItem("edited", [...filtered, currentEditedPokemon]);
        return;
      }
      //if the pokemon was not edited before simply save
      localStorage.setItem("edited", [...editedPokemons, currentEditedPokemon]);
    }
  };

  return {
    currentEditedPokemon,
    setCurrentEditedPokemon,
    handelSubmitEdit,
    disable,
  };
};

export default useEdit;
