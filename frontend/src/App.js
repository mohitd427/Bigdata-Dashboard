import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <BarChart />
      <DoughnutChart/> */}
    </div>
  );
}

export default App;
