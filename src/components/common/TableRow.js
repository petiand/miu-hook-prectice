import { TextField } from "@material-ui/core";
import useGetPokemon from "../../hooks/useGetPokemon";
import storageSingletonInstance from "../../services/singleton";

export default function TableRow(props) {
  const [pokemon, isLoading] = useGetPokemon({ url: props.data.url });
  const editedPokemons = storageSingletonInstance.getPropertyByName("edited");
  const usedPokemon =
    editedPokemons.find((i) => i.id === pokemon?.id) || pokemon;
  const valuesToUse = {
    id: usedPokemon?.id,
    name: usedPokemon?.species.name,
    exp: usedPokemon?.base_experience,
    ability: usedPokemon?.abilities[0].ability.name,
    type: usedPokemon?.types[0].type.name,
  };

  const Cell = props.components.Cell;

  return (
    <div>
      {props.columns.map((column) => (
        <Cell
          {...props}
          size="medium"
          columnDef={column}
          value={valuesToUse[column.field]}
          rowData={valuesToUse}
        />
      ))}
    </div>
  );
}
