import { Chip } from "@mui/material";
import useGetPokeIcon from "../../hooks/useGetPokeIcon";
//import { useGetPokeIconOOP } from "../../hooks/useGetPokeIconOOP";

export default function TypeChip({ pokeType }) {
  const pokeIcon = useGetPokeIcon(pokeType);

  return (
    <Chip
      variant="filed"
      sx={{
        width: "90%",
        height: 50,
        pl: "3px",
        bgcolor: pokeIcon.color,
        borderRadius: 10,
        boxShadow: `0 0 100px ${pokeIcon.color}`,
        ":hover": { filter: "saturate(200%)" },
        "& .MuiChip-label": {
          color: "white",
          fontSize: "120%",
        },
      }}
      avatar={pokeIcon.icon}
      label={pokeIcon.text}
    />
  );
}
