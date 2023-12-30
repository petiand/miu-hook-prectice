import React, { useCallback, useMemo, useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import Cards from "../pokeCard/Cards";

import useScrollListener from "../../hooks/useScrollListener";
import { usePokemon } from "../../hooks/usePokemon";

export default function HomeCards() {
  const { search } = usePokemon();

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

  return <Cards list={usedList} isLoading={isLoading} />;
}
