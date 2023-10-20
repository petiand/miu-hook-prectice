import { createContext, useState } from "react";

export const Context = createContext();

const PokemonContext = ({ children }) => {
  const [value, setValue] = useState("");

  const [favoritList, setFavoritList] = useState([]);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        favoritList,
        setFavoritList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default PokemonContext;
