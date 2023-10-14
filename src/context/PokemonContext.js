import { createContext, useState } from "react";

export const Context = createContext()

const PokemonContext =({children}) => {
    
    const [value, setValue] = useState("")

    const [darkMode, setDarkMode] = useState(false)
    

    return(
        <Context.Provider value={{value, setValue, darkMode, setDarkMode}}>
            {children}
        </Context.Provider>
    )
}

export default PokemonContext
