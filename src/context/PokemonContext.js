import { createContext, useState } from "react";

export const Context = createContext()

const PokemonContext =({children}) => {
    
    const [value, setValue] = useState("")

    const [darkMode, setDarkMode] = useState(false)

    const [favoritList, setFavoritList] = useState([])
    
    return(
        <Context.Provider value={{value, setValue, darkMode, setDarkMode, favoritList, setFavoritList}}>
            {children}
        </Context.Provider>
    )
}

export default PokemonContext
