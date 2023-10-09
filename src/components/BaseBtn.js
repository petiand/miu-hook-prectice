import {Button} from '@mui/material'


export default function BaseBtn({ text, onClick, href, ...restProps }) {

    return(
        <Button 
            variant="outlined" 
            sx={{
                borderColor:"#003049", 
                color:"#003049", 
                ":hover":{borderColor:"#003049"}, 
                ...restProps
             }}
            onClick={onClick} 
        >
            {text}
        </Button>
    )
}