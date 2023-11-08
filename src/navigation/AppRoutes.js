import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeDark, themeLight } from "../styles/theme";

import Header from "../components/common/Header";
import About from "../screens/About";
import Home from "../screens/Home";
import Favorit from "../screens/Favorit";
import { useThemeMode } from "../hooks/useThemeMode";

export default function AppRoutes() {
  const { darkMode } = useThemeMode();
  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="favorit" element={<Favorit />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
