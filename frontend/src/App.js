import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import BarChart from './Charts/BarChart';

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Dashboard />
      <BarChart/>
    </div>
  );
}

export default App;
