import {
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CircularProgress,
} from "@mui/material";

import PokeCardDetail from "./PokeCardDetail";
import ContextValue from "../common/ContextValue";
import AvatarImg from "./AvatarImg";
import PokeCardContent from "./PokeCardContent";
import FavoritIcon from "../pokeCardFavorit/FavoritIcon";
import useGetPokeIcon from "../../hooks/useGetPokeIcon";

export default function PokeCard({
  pokemon,
  pokemonId,
  name,
  type,
  ability,
  height,
  weight,
  handleClick,
  id,
  isLoading,
  anchorEl,
  handleClose,
  open,
}) {
  const color = useGetPokeIcon(type);
  console.log("rerendering");
  return (
    <Grid item xs={3}>
      {pokemonId && (
        <Card
          variant="outlined"
          sx={{
            border: "none",
            m: 2,
            mt: 8,
            maxWidth: 350,
            Height: 350,
            bgcolor: color.bgColor,
            borderRadius: "10px",
            ":hover": {
              boxShadow: "0 0 100px",
              color: color.color,
              scale: "1.1",
            },
          }}
        >
          <CardActionArea aria-describedby={id} onClick={handleClick}>
            <FavoritIcon
              id={pokemonId}
              name={name}
              type={type}
              ability={ability}
              height={height}
              weight={weight}
              position="absolute"
              right="8px"
            />
            {isLoading ? (
              <CircularProgress sx={{ mt: 15 }} />
            ) : (
              <>
                <CardContent
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  {pokemonId && <AvatarImg id={pokemonId} />}
                </CardContent>
                <PokeCardContent name={name} type={type} />
              </>
            )}
            <ContextValue
              color="#fdf0d5"
              bgcolor="#003049"
              position="absolute"
              top="150px"
              left="30px"
              ml="26px"
            />
          </CardActionArea>
        </Card>
      )}
      {!isLoading && pokemon && (
        <PokeCardDetail
          pokemon={pokemon}
          anchorEl={anchorEl}
          handleClose={handleClose}
          id={id}
          open={open}
        />
      )}
    </Grid>
  );
}
