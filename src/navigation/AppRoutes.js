import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeDark, themeLight } from "../styles/theme";

import Header from "../components/common/Header";
import About from "../screens/About";
import Home from "../screens/Home";
import Favorit from "../screens/Favorit";
import { useThemeMode } from "../hooks/useThemeMode";
import useInitializeStorage from "../hooks/useInitializeStorage";

export default function AppRoutes() {
  const { darkMode } = useThemeMode();
  useInitializeStorage();
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
