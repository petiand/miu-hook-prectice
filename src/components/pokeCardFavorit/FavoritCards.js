import { usePokemon } from "../../hooks/usePokemon";
import PokeCard from "../pokeCard/PokeCard";

export default function FavocirtCards() {
  const { favoritList } = usePokemon();

  return (
    <>
      {favoritList.length > 0 &&
        favoritList.map((item, idx) => {
          return (
            <>
              <PokeCard
                key={idx}
                pokemonId={item.id}
                name={item.name}
                type={item.type}
                ability={item.ability}
                height={item.height}
                weight={item.weight}
              />
            </>
          );
        })}
    </>
  );
}
