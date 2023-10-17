import { Grid, Typography } from "@mui/material";

import PokeCardContainer from "../pokeCardHome/PokeCardContainer";

export default function Cards({ list }) {
  return (
    <>
      {list && (
        <Grid container spacing={3}>
          {list.length > 0 &&
            list.map((item, idx) => {
              return <PokeCardContainer key={idx} url={item} />;
            })}
        </Grid>
      )}
      {list.length === 0 && (
        <Typography variant="h3" sx={{ mt: 10 }}>
          no results found
        </Typography>
      )}
    </>
  );
}
