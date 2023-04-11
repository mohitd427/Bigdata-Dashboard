import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import { ChakraProvider } from '@chakra-ui/react';
// import ColorModeSwitch from './Components/ColorModeSwitch';

function App() {
  return (
    <div>
      <ChakraProvider>
        {/* <ColorModeSwitch /> */}

        <Navbar />
        <MainRoutes />
    
      </ChakraProvider>
    </div>
  );
}

export default App;
