import PokemonContext from './context/PokemonContext';
import AppRoutes from './navigation/AppRoutes';

function App() {

  return (
    <PokemonContext>
      <AppRoutes />
    </PokemonContext>
  );
}

export default App;

/* forweek2: 
-axio, async/await, error handeling (data fetching)
-AvatarimgComp + loadingspinner to card and avatar
-Global styling - theme+darkmode
-folder structure, separeta presentational component from data managing components
 */
