import { Box, Container, Grid } from "@mui/material";

import FavocirtCards from "../components/pokeCardFavorit/FavoritCards";
import BackButton from "../components/common/BackButton";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

export default function Favorit() {
  return (
    <>
      <BackButton to={"/"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Favorit Pokemons</h1>

        <FavocirtCards />

        <ScrollTopBtn />
      </Box>
    </>
  );
}
