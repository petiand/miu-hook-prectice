import { CardActionArea, IconButton } from "@mui/material";
import { usePokemon } from "../../hooks/usePokemon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ToggleMode() {
  const modeContext = usePokemon();

  function toggleTheme() {
    modeContext.setDarkMode((prev) => !prev);
  }

  return (
    <CardActionArea
      onClick={toggleTheme}
      sx={{
        pl: 1,
        width: 115,
        border: 1,
        borderRadius: 5,
        alignItems: "center",
        bgcolor: "#fdf0d5",
        color: "#003049",
      }}
    >
      {modeContext.darkMode ? "darkmode" : "lightmode"}
      <IconButton>
        {modeContext.darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </CardActionArea>
  );
}
