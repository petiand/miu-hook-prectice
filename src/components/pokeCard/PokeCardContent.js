import { CardContent, Typography } from "@mui/material";

export default function PokeCardContent({
  pokemonId,
  name,
  type,
  ability,
  height,
  weight,
}) {
  return (
    <CardContent sx={{ textAlign: "center" }}>
      <Typography variant="h5">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Typography>Type: {type}</Typography>
      <Typography>Base Ability: {ability}</Typography>
      <Typography>
        Hight: {height}m Weight: {weight}kg
      </Typography>
    </CardContent>
  );
}
