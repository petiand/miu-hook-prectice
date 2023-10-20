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
//TODO for week2
//useCalback
//familiarize in deep for global stylin in miu, hoove etc
//separet componenet- managing+rendering
//when search dont rerender

/* week2 realizations: 
-axio, async/await, error handeling (data fetching)
-AvatarimgComp + loadingspinner to card and avatar
-Global styling - theme+darkmode
-folder structure, separeta presentational component from data managing components
-performance improve using useCallback, optimaizasion the search bar with a set time out
 */
