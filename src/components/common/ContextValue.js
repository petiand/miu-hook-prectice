import { Box, Typography } from "@mui/material"
import { usePokemon } from "../../hooks/usePokemon"

export default function ContextValue(props) {
    
    const someContext = usePokemon()
    
    const condition = (someContext.value.localeCompare(""))
    
    return ( <>
        {condition !== 0 &&
        <Box
            sx={{ 
                p:2,  
                borderRadius:"10px",
                width:220,
                ...props}}
        >
        <Typography>
            Global value: {someContext.value} 
        </Typography>
        </Box> 
        }
        </>
    )
}