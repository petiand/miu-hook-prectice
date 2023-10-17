import { TextField } from "@mui/material";
import { usePokemon } from "../../hooks/usePokemon";

export default function ContextInput() {
    
    const {value, setValue} = usePokemon()

    const onChangeContextBar = (e) => setValue(e.target.value)
    
    return (
        <TextField 
                sx={{
                    width:450, 
                    mb:5, 
                }}
                value={value}  
                onChange={onChangeContextBar} 
                id="context-bar" 
                label="Type global context" 
            />
    )
}