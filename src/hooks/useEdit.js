import { useState } from "react";
import storageSingletonInstance from "../services/singleton";

const useEdit = (pokemon) => {
  const editedPokemons = storageSingletonInstance.getPropertyByName("edited");

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
      storageSingletonInstance.setEdited(currentEditedPokemon);
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
