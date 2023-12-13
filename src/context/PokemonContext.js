import { createContext, useState } from "react";

export const Context = createContext();

const PokemonContext = ({ children }) => {
  const [value, setValue] = useState("");

  const [favoritList, setFavoritList] = useState([]);

  const [isTable, setIsTable] = useState(false);

  return (
    <Context.Provider
      value={{
        value,
        setValue,
        favoritList,
        setFavoritList,
        isTable,
        setIsTable,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default PokemonContext;

//creat an abstraction: make sure only one instance, and inject from the aplication layer  for the local storage,
//singelton designt patter indepandecy injecton
//singelton
//be abele to run the coverage!
//an what it miss, how can cover that is missing
//analysis
//lift up the requests, and the storage of the responses catch
//cancelation token, abort contorolers
