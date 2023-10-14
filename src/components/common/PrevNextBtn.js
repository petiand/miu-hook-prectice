import { Box } from "@mui/material";
import BaseBtn from "./BaseBtn";

export default function PrevNext({ pokemonData, onGoBack, onGoNext }) {
    return (
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
    )
}