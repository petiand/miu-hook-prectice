import { DataGrid } from "@mui/x-data-grid";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import storageSingletonInstance from "../../services/singleton";
import { Box } from "@mui/material";

export default function PokemonTable() {
  const pokemons = storageSingletonInstance.getPropertyByName("tableList");
  console.log(pokemons);
  const columns = [
    { field: "name", headerName: "Name", width: 150, editable: true },
    { field: "exp", headerName: "Exp", width: 50 },
    { field: "ability", headerName: "Ability", width: 150, editable: true },
    { field: "type", headerName: "Type", width: 100 },
  ];

  const rows = pokemons?.map((row) => ({
    id: row.id,
    name: row.species.name,
    exp: row.base_experience,
    ability: row.abilities[0].ability.name,
    type: row.types[0].type.name,
  }));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Box sx={{ height: 300, width: "80%" }}>
        <DataGridPremium
          initialState={{
            rowGrouping: {
              model: ["type"],
            },
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
