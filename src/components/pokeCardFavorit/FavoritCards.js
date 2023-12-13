import { Grid, Typography } from "@mui/material";
import { usePokemon } from "../../hooks/usePokemon";
import PokeCard from "../pokeCard/PokeCard";

export default function FavocirtCards() {
  const { favoritList } = usePokemon();

  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, md: 10 }}
        px={{ xs: 2, sm: 3, md: 15, lg: 20 }}
      >
        {favoritList.length > 0 ? (
          favoritList.map((item, idx) => {
            return (
              <PokeCard
                key={idx}
                pokemonId={item.id}
                name={item.name}
                type={item.type}
                ability={item.ability}
                height={item.height}
                weight={item.weight}
              />
            );
          })
        ) : (
          <Typography variant="h3" sx={{ mt: 10 }}>
            no favorit Pokemons
          </Typography>
        )}
      </Grid>
    </>
  );
}
