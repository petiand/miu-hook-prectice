import { useEffect, useState } from "react";
import axios from "axios";

const useGetPokemon = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getPokemon = async () => {
      try {
        const respons = await axios.get(url);
        setData(respons.data);
        setIsLoading(true);
      } catch (err) {
        alert(`${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemon();
  }, [url]);

  return [data, isLoading];
};

export default useGetPokemon;
