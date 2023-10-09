import {Typography, Toolbar, Link, CardActionArea} from '@mui/material'
import pokeball from "../images/pokeball.png"
import ContextValue from './ContextValue'
import {Link as RouterLink } from 'react-router-dom'

export default function Header() {
    return (
    <>
    <Toolbar 
        sx={{ 
            bgcolor:"#003049", 
            display:'flex', 
            alignItems:"center", 
            justifyContent:'space-between',
            }}
    >
        <CardActionArea 
            component={RouterLink} to="/"
            sx={{
                display:'flex', 
                alignItems:"center", 
                width:220, border: 1, 
                borderColor:"#fdf0d5", 
                p:1, 
                borderRadius:1
            }}
        >
            <img 
                src={pokeball} 
                alt="pokebalimage" 
                style={{height:35, width:35
                }}
            />
            <Typography 
                variant="h5" 
                sx={{
                    color:"#f2e8cf", 
                    ml:1
                    }}
            >
                POKE CODEX
            </Typography>    
        </CardActionArea>
        <ContextValue 
            color="#003049" 
            bgcolor="#fdf0d5" 
        />
        <Link 
            href="/description" 
            variant="h5" 
            underline="none"
            sx={{color:"#f2e8cf", mr:2, width:220, border: 1, borderColor:"#fdf0d5", p:1, borderRadius:1, textAlign:'center'}}        
        >
            {'APP DESCRIPTION'}
        </Link> 
    </Toolbar>
    </>
)}