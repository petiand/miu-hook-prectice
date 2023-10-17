import useGetPokemon from "../../hooks/useGetPokemon";

import React, {useCallback, useState} from 'react'
import PokeCard from "../pokeCard/PokeCard";

export default function PokeCardContainer({url}) {

    const [pokemon, isLoading] = useGetPokemon({url: url})
    
    console.log(pokemon)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback( (event) => {
        setAnchorEl(event.currentTarget);
      },[]);
      
      const handleClose = useCallback( () => {
        setAnchorEl(null);
      }, [] );

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <PokeCard
        pokemon={pokemon} 
        handleClick={handleClick} 
        id={id} 
        isLoading={isLoading} 
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />
    )
}