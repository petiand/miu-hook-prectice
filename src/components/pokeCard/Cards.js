import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import PokeCardContainer from "../pokeCardHome/PokeCardContainer";

export default function Cards({ list, isLoading }) {
  return (
    <>
      {isLoading && <CircularProgress sx={{ mt: 15 }} />}
      {list && list?.length > 0 ? (
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 3, md: 10 }}
          px={{ xs: 2, sm: 3, md: 15, lg: 20 }}
        >
          {list?.length > 0 &&
            list.map((item, idx) => {
              return <PokeCardContainer key={idx} url={item} />;
            })}
        </Grid>
      ) : (
        <Typography variant="h3" sx={{ mt: 10 }}>
          no results found
        </Typography>
      )}
    </>
  );
}
