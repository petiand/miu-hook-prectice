import { BrowserRouter, Routes, Route} from "react-router-dom"

import { CssBaseline, ThemeProvider } from '@mui/material';
import { themeDark, themeLight } from "../styles/theme";
import { usePokemon } from '../hooks/usePokemon';

import Header from "../components/common/Header"
import About from "../screens/About";
import ToggleMode from "../components/common/ToggleMode";
import Home from "../screens/Home";

export default function AppRoutes() {

    const mode = usePokemon()

    return (
    <>
        <ThemeProvider theme={mode.darkMode ? themeDark : themeLight}>
            <CssBaseline />
            <BrowserRouter>
                <Header />
                <ToggleMode />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="description" element={<About />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </>
)}