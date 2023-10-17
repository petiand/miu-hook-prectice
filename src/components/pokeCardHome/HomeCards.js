import React, {useMemo, useState} from 'react';
import useGetPokemon from "../../hooks/useGetPokemon";
import Cards from '../pokeCard/Cards';
import PrevNextBtn from "../common/PrevNextBtn"

export default function HomeCards({search}) {

    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    const [pokemonData, isLoading] = useGetPokemon({url:currentUrl})
//useCalback 
//familiarize in deep for global stylin in miu, hoove etc
//separet componenet- managing+rendering
    const onGoNext =  () =>{
        setCurrentUrl(pokemonData.next)
    }

    const onGoBack = () =>{
        setCurrentUrl(pokemonData.previous)
    }
 
    const filteredList = useMemo( () => 
              pokemonData?.results.filter((p) => p.name.toLowerCase().includes(search.toLocaleLowerCase())), [pokemonData, search])
  
    const sorted = useMemo( () => filteredList?.toSorted((a, b) => a.name.localeCompare(b.name)), [filteredList])
    
    const sortedList = (filteredList?.length === pokemonData?.results.length) ? filteredList : sorted
    
    return (
        <>
        <PrevNextBtn
            pokemonData={pokemonData}
            onGoNext={onGoNext}
            onGoBack={onGoBack}
        />
        <Cards 
            pokemonData= {pokemonData}
            filteredList= {filteredList}
            sortedList= {sortedList}
            isLoading= {isLoading}
        />
        </>
    )
}