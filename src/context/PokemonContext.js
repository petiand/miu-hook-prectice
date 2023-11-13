import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const PokemonContext = ({ children }) => {
  const [value, setValue] = useState("");

  const [favoritList, setFavoritList] = useState([]);

  const [deletedPokemonIds, setDeletedPokemonIds] = useState(
    JSON.parse(localStorage.getItem("deleted")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("deleted", JSON.stringify(deletedPokemonIds));
  }, [deletedPokemonIds]);

  const [editedPokemons, setEditedPokemons] = useState(
    JSON.parse(localStorage.getItem("edited")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("edited", JSON.stringify(editedPokemons));
  }, [editedPokemons]);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        favoritList,
        setFavoritList,
        deletedPokemonIds,
        setDeletedPokemonIds,
        editedPokemons,
        setEditedPokemons,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default PokemonContext;
