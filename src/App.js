import PokemonContext from "./context/PokemonContext";
import ThemeContext from "./context/ThemeContext";
import AppRoutes from "./navigation/AppRoutes";

function App() {
  return (
    <PokemonContext>
      <ThemeContext>
        <AppRoutes />
      </ThemeContext>
    </PokemonContext>
  );
}

export default App;
