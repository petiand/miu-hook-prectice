import { usePokemon } from "../../hooks/usePokemon";
import PokeCard from "../pokeCard/PokeCard";

export default function FavocirtCards() {
  const { favoritList, editedPokemons } = usePokemon();
  const usedPokemon =
    editedPokemons.find((i) => i.id === favoritList?.id) || favoritList;

  return (
    <>
      {usedPokemon.length > 0 &&
        usedPokemon.map((item, idx) => {
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
