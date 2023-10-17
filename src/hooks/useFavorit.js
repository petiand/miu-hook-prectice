import { usePokemon } from "./usePokemon";

    const useFavorit = (id, name, type, ability, height, weight ) => {

  const {favoritList, setFavoritList} = usePokemon();

  const isFavorit = favoritList.find((e) => e.id === id);

  const onFavorit = () => {
    if (isFavorit) setFavoritList(favoritList.filter((e) => e.id !== id));
    else
      setFavoritList((prev) => [
        ...prev,
        {
          id: id,
          name: name,
          type: type,
          ability: ability,
          height: height,
          weight: weight
        },
      ]);
  };

  return [onFavorit, isFavorit];
};

export default useFavorit;
