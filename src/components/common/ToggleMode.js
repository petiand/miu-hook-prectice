import { CardActionArea, IconButton } from "@mui/material"
import { usePokemon } from "../../hooks/usePokemon"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ToggleMode() {

    const modeContext = usePokemon()

    console.log(modeContext.darkMode)

    function toggleTheme() {
        modeContext.setDarkMode((prev) => (!prev))
    }

    return (
        <CardActionArea 
            onClick={toggleTheme} 
            sx={
                {m:5, 
                border:1, 
                pl:1.5, 
                borderRadius:5, 
                width:115, 
                alignItems:"center"}}>
            {modeContext.darkMode ? "darkmode" : "lightmode"}
            <IconButton
            >
                {modeContext.darkMode ? <DarkModeIcon /> : <LightModeIcon /> }
            </IconButton>
        </CardActionArea>
        )
}