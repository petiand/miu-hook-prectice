import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
//import storageSingletonInstance from "../services/singleton";

const useEdit = (pokemon) => {
  const localStorage = useLocalStorage();
  const editedPokemons =
    //storageSingletonInstance.getPropertyByName("edited");
    localStorage.getItem("edited") || [];

  const [currentEditedPokemon, setCurrentEditedPokemon] = useState({
    id: pokemon?.id,
    species: { name: pokemon?.species.name },
    types: [{ type: { name: pokemon?.types[0].type.name } }],
    base_experience: pokemon?.base_experience,
    held_items: [{ item: { name: pokemon?.held_items[0]?.item?.name } }],
    abilities: [{ ability: { name: pokemon?.abilities[0].ability.name } }],
    sprites: {
      front_default: pokemon?.sprites.front_default,
      back_default: pokemon?.sprites.back_default,
    },
  });

  const savedEditedPokemon = editedPokemons?.find(
    (item) => item.id === pokemon?.id
  );
  const usedForCheck = savedEditedPokemon || pokemon;

  const disable =
    currentEditedPokemon.species.name !== usedForCheck.species.name ||
    currentEditedPokemon.types[0].type.name !==
      usedForCheck.types[0].type.name ||
    currentEditedPokemon.base_experience !== usedForCheck.base_experience ||
    currentEditedPokemon.held_items[0]?.item?.name !==
      usedForCheck.held_items[0]?.item?.name ||
    currentEditedPokemon.abilities[0].ability.name !==
      usedForCheck.abilities[0].ability.name;

  const handelSubmitEdit = () => {
    if (disable) {
      if (savedEditedPokemon) {
        const filtered = editedPokemons.filter(
          (item) => item.id !== savedEditedPokemon.id
        );
        localStorage.setItem("edited", filtered);
        //storageSingletonInstance.setPropertyValue("edited", filtered);
      }
      const current = localStorage.getItem("edited");
      localStorage.setItem("edited", [...current, currentEditedPokemon]);
      //storageSingletonInstance.setPropertyValue("edited", [...current, currentEditedPokemon]);
    }
  };

  console.log(usedForCheck);

  return {
    currentEditedPokemon,
    setCurrentEditedPokemon,
    handelSubmitEdit,
    disable,
  };
};

export default useEdit;
