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
axio, async/await, error handeling
AvatarimgComp + loadingspinner to card and avatar */
