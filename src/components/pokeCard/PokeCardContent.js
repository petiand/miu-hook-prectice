import { CardContent, Typography } from "@mui/material";
import TypeChip from "./TypeChip";

export default function PokeCardContent({ name, type }) {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <TypeChip pokeType={type} />
    </CardContent>
  );
}
