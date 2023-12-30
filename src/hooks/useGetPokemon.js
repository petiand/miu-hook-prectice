import { useEffect, useState } from "react";
import axios from "axios";

const useGetPokemon = ({ url, shouldKeepPreviousData = false, limit = 20 }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const abortController = new AbortController();

    const cancellationToken = abortController.signal;

    const getPokemon = async () => {
      try {
        const response = await axios.get(url, {
          signal: cancellationToken,
          params: {
            limit,
          },
        });
        if (shouldKeepPreviousData && data !== null) {
          const currentResults = [...data?.results, ...response?.data?.results];
          const newData = {
            ...response.data,
            results: currentResults,
          };
          setData(newData);
        } else if (shouldKeepPreviousData && !data) {
          setData(response.data);
        } else {
          const pokemon = response?.data;
          setData({
            id: pokemon?.id,
            species: { name: pokemon?.species?.name },
            types: [
              {
                type: {
                  name: pokemon?.types ? pokemon?.types[0]?.type?.name : [],
                },
              },
            ],
            base_experience: pokemon?.base_experience,
            held_items: [
              {
                item: {
                  name: pokemon?.held_items
                    ? pokemon?.held_items[0]?.item?.name
                    : [],
                },
              },
            ],
            abilities: [
              {
                ability: {
                  name: pokemon?.abilities
                    ? pokemon?.abilities[0].ability?.name
                    : [],
                },
              },
            ],
            sprites: {
              front_default: pokemon?.sprites?.front_default,
              back_default: pokemon?.sprites?.back_default,
            },
          });
        }
        setIsLoading(true);
      } catch (err) {
        if (err.name !== "CanceledError") console.log(`error:${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemon();

    return () => {
      abortController.abort();
    };
  }, [url, shouldKeepPreviousData]);

  return [data, isLoading];
};

export default useGetPokemon;
