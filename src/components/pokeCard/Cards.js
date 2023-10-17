import { Container, Grid,Typography } from '@mui/material';

import PokeCardContainer from '../pokeCardHome/PokeCardContainer';

export default function Cards({pokemonData, filteredList, sortedList, isLoading }) {
  
    return (
        <> 
        {filteredList &&
        <Container 
            maxWidth="lg" 
            sx={{ 
                p:5, 
                textAlign:"center",  
                }}
        >
            {filteredList.length >0 && <Typography variant="subtitle1" sx={{mb:1}}  >click to the card for detail</Typography>}
            <Grid container spacing={3}>
            { sortedList?.map((item, idx) => {
                return  <PokeCardContainer key={idx} url={item.url} isLoading={isLoading} />}
                )
            }
            </Grid>
            {filteredList.length ===0 && <Typography variant="h3" sx={{mt:10}}  >no results found</Typography>}
        </Container>
      }
        </>
    )
}