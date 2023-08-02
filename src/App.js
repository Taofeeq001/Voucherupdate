import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <ToastContainer/>
    </div>
  );
}

export default App;
