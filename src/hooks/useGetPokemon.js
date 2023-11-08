import { useEffect, useState } from "react";
import axios from "axios";

const useGetPokemon = ({ url, shouldKeepPreviousData = false }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getPokemon = async () => {
      try {
        const response = await axios.get(url);
        if (shouldKeepPreviousData && data !== null) {
          const currentResults = [...data.results, ...response.data?.results];
          const newData = {
            ...response.data,
            results: currentResults,
          };
          setData(newData);
        } else {
          setData(response.data);
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
