import React, {useState} from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RoutesComponent as Routes } from "./components/AppRoutes.jsx";

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}> 
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;