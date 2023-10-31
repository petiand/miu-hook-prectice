import { CardActionArea, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeMode } from "../../hooks/useThemeMode";

export default function ToggleMode() {
  const { darkMode, setDarkMode } = useThemeMode();

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return (
    <CardActionArea
      data-testid="toggle"
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
