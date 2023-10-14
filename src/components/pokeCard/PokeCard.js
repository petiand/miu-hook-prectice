import {  Card, CardContent, Grid, CardActionArea, CircularProgress  } from "@mui/material"

import PokeCardDetail from "./PokeCardDetail"
import ContextValue from "../common/ContextValue"
import AvatarImg from "./AvatarImg"
import PokeCardContent from "./PokeCardContent"


export default function PokeCard( {pokemon, handleClick, id, isLoading, anchorEl, handleClose, open }) {

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
                // bgcolor:"#F7EF99", 
                borderRadius:"10px", 
                ":hover":{boxShadow:20, scale: "1.1"}}} 
            > 
                {isLoading ? <CircularProgress sx={{mt:15}} /> :
                <>
            <CardContent 
                sx={{
                    display:"grid", 
                    justifyContent:"center"
                }}
            >
            {pokemon.id && <AvatarImg id={pokemon.id} />} 
            </CardContent>
            <PokeCardContent pokemon={pokemon}/>
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