import './App.css';
import { SimulationProvider } from './contexts/SimulationProvider/SimulationProvider';
import RoutesMain from './routes/RoutesMain';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <>
      <SimulationProvider>
        <GlobalStyle/>
        <RoutesMain />
      </SimulationProvider>
    </>
  );
}

export default App;
