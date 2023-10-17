import { Button } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

export default function BackButton({to}) {

    return (
        <Button
                component={RouterLink} to={to}
                variant="outlined"
                sx={{
                    ml:10,
                    mt:3
                    }}
            >
                back   
            </Button>
    )
}