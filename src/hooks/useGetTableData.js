import { useEffect, useState } from "react";
import useGetPokemon from "./useGetPokemon";
import axios from "axios";

export default function useGetTableData() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [limit, setLimit] = useState(20);
  const [pokemonData, isLoading] = useGetPokemon({
    url: currentUrl,
    shouldKeepPreviousData: true,
    limit: limit,
  });
  console.log(pokemonData);

  const getData = async () => {
    let pokemonDetailsPromises;
    try {
      pokemonDetailsPromises = pokemonData?.results?.map(
        async (data) => await axios.get(data?.url)
      );
    } catch (err) {
      console.log(err);
    } finally {
      if (pokemonDetailsPromises) {
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);

        const mappedData = pokemonDetails.map((detail) => ({
          id: detail?.data?.id,
          name: detail?.data?.species.name,
          exp: detail?.data?.base_experience,
          ability: detail?.data?.abilities[0].ability.name,
          type: detail?.data?.types[0].type.name,
        }));
        setPokemonList(mappedData);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [pokemonData]);

  return {
    pokemonList,
    setCurrentUrl,
    limit,
    setLimit,
    isLoading,
    pokemonData,
  };
}
