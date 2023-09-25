import './App.css';
import { useState, useEffect } from 'react';
import {HomeLarge, HomeSmall} from './components/Home'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
    
  const [elementWidth, setElementWidth] = useState(100); // Initial width in pixels
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmall, setIsSmall] = useState(false);

  const resizeWindow = () => {
    setElementWidth(1000);
  };

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Call the resize function when the component mounts
    resizeWindow();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div>
        {windowWidth < 800 ? <HomeSmall/> : <HomeLarge/>}
       
      </div>
    </>
     
  );
}

export default App;
