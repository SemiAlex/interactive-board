import './App.css';
import { useState, useEffect } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Columns from './components/Columns';

function App() {
  const [columns, setColumns] = useState([])

  return (
    <div className='light-grey background-height'>
      <ThemeContext.Provider value={{ columns, setColumns }}>
        <Header />
        <Columns />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
