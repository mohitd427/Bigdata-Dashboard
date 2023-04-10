import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import { ChakraProvider } from '@chakra-ui/react';
// import ColorModeSwitch from './Components/ColorModeSwitch';

function App() {
  return (
    <div >
      <ChakraProvider>
        
        <Navbar />
        <MainRoutes />
        {/* <BarChart />
      <DoughnutChart/> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
