import React, { useCallback, useMemo, useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import Cards from "../pokeCard/Cards";

import { Container } from "@mui/material";
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

  const usedList = useMemo(() => {
    if (search) {
      const filtered = pokemonData?.results.filter((item) =>
        item.name.toLowerCase().includes(search?.toLocaleLowerCase())
      );
      if (filtered && filtered?.length > 0) {
        const sorted = filtered?.sort((a, b) => a.name.localeCompare(b.name));
        return sorted?.map((i) => i.url);
      }
    } else return pokemonData?.results?.map((i) => i.url);
  }, [pokemonData, search]);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          //bgcolor: "white",
        }}
      >
        <Cards list={usedList} isLoading={isLoading} />
      </Container>
    </>
  );
}
