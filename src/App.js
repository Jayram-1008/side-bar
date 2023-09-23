import './App.css';
import {HomeLarge, HomeSmall} from './components/Home'
import { 
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
    <>
      <div>
        <HomeSmall/>
      </div>
    </>
     
  );
}

export default App;
