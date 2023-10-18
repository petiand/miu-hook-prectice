import React, { useCallback, useMemo, useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import Cards from "../pokeCard/Cards";
import PrevNextBtn from "../common/PrevNextBtn";
import { Container, Typography } from "@mui/material";
import FavoritButton from "../pokeCardFavorit/FavoritButton";

export default function HomeCards({ search }) {
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [pokemonData, isLoading] = useGetPokemon({ url: currentUrl });

  const onGoNext = useCallback(() => {
    setCurrentUrl(pokemonData.next);
  }, [pokemonData]);

  const onGoBack = useCallback(() => {
    setCurrentUrl(pokemonData.previous);
  }, [pokemonData]);

  const filteredList = useMemo(
    () =>
      pokemonData?.results.filter((p) =>
        p.name.toLowerCase().includes(search?.toLocaleLowerCase())
      ),
    [pokemonData, search]
  );

  const sorted = useMemo(
    () => filteredList?.toSorted((a, b) => a.name.localeCompare(b.name)),
    [filteredList]
  );

  const sortedList =
    filteredList?.length === pokemonData?.results.length
      ? filteredList
      : sorted;

  const sortedUrlList = [];

  if (sortedList)
    for (const { url: sortedUrl } of sortedList) {
      sortedUrlList.push(sortedUrl);
    }

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          p: 5,
          textAlign: "center",
        }}
      >
        <FavoritButton />
        <PrevNextBtn
          pokemonData={pokemonData}
          onGoNext={onGoNext}
          onGoBack={onGoBack}
        />
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          click to the card for detail
        </Typography>
        <Cards list={sortedUrlList} isLoading={isLoading} />
      </Container>
    </>
  );
}
