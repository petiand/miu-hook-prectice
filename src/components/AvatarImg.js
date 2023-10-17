import { CircularProgress, Paper } from "@mui/material"
import { useCallback, useState } from "react"

export default function AvatarImg(id) {

    const [imgIsLoading, setImgIsLoading] = useState(true)
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id.id}.svg`
    
    const onLoad = useCallback(() => setImgIsLoading(false), [id])

    return (
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
                        {imgIsLoading && <CircularProgress sx={{zIndex:1, position:"absolute"}} />}
                        { url && <img  
                            src= {url} 
                            style={{height:115, width:115}} 
                            alt="pokemonimg"
                            onLoad={onLoad} 
                            />}
                    </Paper>

    )
}