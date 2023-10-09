import {  Card, CardContent, Paper, Typography, Grid, CardActionArea, CircularProgress  } from "@mui/material"
import React, {useCallback, useState} from 'react'
import useFetch from "../hooks/useFetch"

import PokeCardDetail from "./PokeCardDetail"
import ContextValue from "./ContextValue"


export default function PokeCard( {name, url}) {

    const [pokemon, isLoading] = useFetch({url: url})
    
    const urlGood =  pokemon ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg` : ""

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
    <Grid item xs={4}>
        { pokemon &&
        <CardActionArea 
        aria-describedby={id} 
        onClick={handleClick} 
        >
            <Card
            variant="outlined"
            sx={{
                m: 2, 
                minWidth:300,
                minHeight:300, 
                bgcolor:"#F7EF99", 
                borderRadius:"10px", 
                ":hover":{boxShadow:20, scale: "1.1"}}} 
            > 
                {isLoading ? <CircularProgress /> :
                <>
                <CardContent 
                sx={{
                    display:"grid", 
                    justifyContent:"center"
                    }}
                >
                    <Paper 
                    elevation={6} 
                    sx={{
                        display:"flex",
                         width:170, 
                         height:170, 
                         bgcolor:"#F4D590", 
                         borderRadius:"50%", 
                         alignItems:"center", 
                         justifyContent:"center"
                         }}
                    >
                        <img  
                            src= {urlGood} 
                            style={{height:115, width:115}} 
                            alt="pokemonimg" 
                        />
                    </Paper>
                </CardContent>
                <CardContent 
                    sx={{textAlign:"center"}}
                >
                    <Typography 
                        variant="h5"
                    >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Typography>
                    <Typography>
                        Type: {pokemon.types[0].type.name}
                    </Typography> 
                    <Typography>
                        Base Ability: {pokemon.abilities[0].ability.name} 
                    </Typography> 
                    <Typography>
                        Hight: {pokemon.height}m Weight: {pokemon.weight}kg
                    </Typography>
                </CardContent>
                </>
            }
            <ContextValue 
                color="#fdf0d5"
                bgcolor="#003049"
                position="absolute"
                top= "150px"
                left= "30px"
                ml="26px"
            />
            </Card>
        </CardActionArea>
        }
        {!isLoading && pokemon &&
            <PokeCardDetail
            pokemon= {pokemon} 
            anchorEl= {anchorEl} 
            handleClose= {handleClose}
            id= {id}
            open= {open}
            />
        }     
    </Grid>
)}