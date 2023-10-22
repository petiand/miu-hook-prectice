import { Card, Typography } from "@mui/material";
import useGetPokeIcon from "../../hooks/useGetPokeIcon";

export default function TypeIcon({ pokeType }) {
  const pokeIcon = useGetPokeIcon(pokeType);

  return (
    <Card
      sx={{
        border: "none",
        mt: 1,
        p: 1,
        pl: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 50,
        bgcolor: pokeIcon.color,
        borderRadius: 10,
        boxShadow: `0 0 100px ${pokeIcon.color}`,
        ":hover": { filter: "saturate(200%)" },
      }}
    >
      {pokeIcon.icon}
      <Typography variant="h5" sx={{ ml: 1, color: "white" }}>
        {pokeIcon.text}
      </Typography>
    </Card>
  );
}
