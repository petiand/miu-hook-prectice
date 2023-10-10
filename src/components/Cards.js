import React, {useMemo, useState} from 'react';
import { Box, Container, Grid,Typography } from '@mui/material';

import PokeCard from "./PokeCard";
import useFetch from "../hooks/useFetch";
import BaseBtn from './BaseBtn';

export default function Cards({search}) {

    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    const [pokemonData, isLoading] = useFetch({url:currentUrl})

    const onGoNext = () =>{
        setCurrentUrl(pokemonData.next)
    }

    const onGoBack = () =>{
        setCurrentUrl(pokemonData.previous)
    }
 
    const filtered = useMemo( () => 
              pokemonData?.results.filter((p) => p.name.toLowerCase().includes(search.toLocaleLowerCase())), [pokemonData, search])
  
    const sorted = useMemo( () => filtered?.toSorted((a, b) => a.name.localeCompare(b.name)), [filtered])
    
    const whenSerchSort = (filtered?.length === pokemonData?.results.length) ? filtered : sorted
  
    return (
        <>
        <Box 
        sx={{
            mx:20, 
            display:'flex', 
            justifyContent:'space-between'
            }}
        >
            {pokemonData?.previous ? 
            <BaseBtn
            text="prev"
            onClick={onGoBack}
                width="100px" 
            />
            :
            <div></div>
            }
            <BaseBtn
            text="next"
            onClick={onGoNext}
                width="100px"
            />
        </Box> 
      {filtered &&
        <Container 
            maxWidth="lg" 
            sx={{ 
                height:"vh",
                p:5, 
                textAlign:"center", 
                bgcolor:"#fdf0d5" 
                }}
        >
            {filtered.length >0 && <Typography variant="subtitle1" sx={{mb:1}}  >click to the card for detail</Typography>}
            <Grid container spacing={3}>
            { whenSerchSort?.map((item, idx) => {
                return  <PokeCard key={idx} name={item.name} url={item.url} isLoading={isLoading} />}
                )
            }
            </Grid>
            {filtered.length ===0 && <Typography variant="h3" sx={{mt:10}}  >no results found</Typography>}
        </Container>
      }
        </>
    )
}