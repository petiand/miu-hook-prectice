import { CardActionArea, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../hooks/useTheme";

export default function ToggleMode() {
  const { darkMode, setDarkMode } = useTheme();

  function toggleTheme() {
    setDarkMode((prev) => !prev);
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
      {darkMode ? "darkmode" : "lightmode"}
      <IconButton>{darkMode ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    </CardActionArea>
  );
}
