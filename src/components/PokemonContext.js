import { createContext, useState } from "react";

export const Context = createContext()

const PokemonContext =({children}) => {
    const [value, setValue] = useState("")
    

    return(
        <Context.Provider value={{value, setValue}}>
            {children}
        </Context.Provider>
    )
}

export default PokemonContext
