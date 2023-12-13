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
        width: { xs: 25, sm: 30, md: 38, lg: 38 },
        height: { xs: 25, sm: 30, md: 38, lg: 38 },
        border: 1,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fdf0d5",
        color: "#003049",
      }}
    >
      <IconButton>{darkMode ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    </CardActionArea>
  );
}
