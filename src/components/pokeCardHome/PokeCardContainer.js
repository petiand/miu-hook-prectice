import useGetPokemon from "../../hooks/useGetPokemon";

import React, {useCallback, useState} from 'react'
import PokeCard from "../pokeCard/PokeCard";

export default function PokeCardContainer({url}) {

    const [pokemon, isLoading] = useGetPokemon({url: url})

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
      <>
      {pokemon &&
      <PokeCard
        pokemon={pokemon}
        pokemonId={pokemon.id} 
        name={pokemon.species.name} 
        type={pokemon.types[0].type.name} 
        ability={pokemon.abilities[0].ability.name} 
        height={pokemon.height} 
        weight={pokemon.weight} 
        handleClick={handleClick} 
        id={id} 
        isLoading={isLoading} 
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />
      }
      </>
    )
}