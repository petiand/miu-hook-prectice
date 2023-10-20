import React, { useCallback, useMemo, useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import Cards from "../pokeCard/Cards";

import { Container } from "@mui/material";
import FavoritButton from "../pokeCardFavorit/FavoritButton";
import useScrollListener from "../../hooks/useScrollListener";

export default function HomeCards({ search }) {
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [pokemonData, isLoading] = useGetPokemon({
    url: currentUrl,
    shouldKeepPreviousData: true,
  });

  const onGoNext = useCallback(() => {
    setCurrentUrl(pokemonData?.next);
  }, [pokemonData]);

  useScrollListener({ callBack: onGoNext });

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
        <Cards list={sortedUrlList} isLoading={isLoading} />
      </Container>
    </>
  );
}
