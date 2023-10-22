import { CardContent, Typography } from "@mui/material";
import TypeIcon from "./TypeIcon";

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
      <TypeIcon pokeType={type} />
    </CardContent>
  );
}
