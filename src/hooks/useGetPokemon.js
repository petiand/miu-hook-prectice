import { useEffect, useState } from "react";
import axios from "axios";

const useGetPokemon = ({ url, shouldKeepPreviousData = false }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getPokemon = async () => {
      try {
        const respons = await axios.get(url);
        if (shouldKeepPreviousData && data !== null) {
          const currentResults = [...data.results, ...respons.data?.results];
          const newData = {
            ...respons.data,
            results: currentResults,
          };
          setData(newData);
        } else {
          setData(respons.data);
        }
        setIsLoading(true);
      } catch (err) {
        alert(`${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemon();
  }, [url, shouldKeepPreviousData]);

  return [data, isLoading];
};

export default useGetPokemon;
