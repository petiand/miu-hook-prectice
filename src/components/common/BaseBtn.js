import {Button} from '@mui/material'

export default function BaseBtn({ text, onClick, href, ...restProps }) {

    return(
        <Button 
            variant="outlined" 
            sx={{...restProps}}
            onClick={onClick} 
        >
            {text}
        </Button>
    )
}