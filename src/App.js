import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Textutils from './Components/Textutils';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    console.log("ToggleMode trigered");
    if (mode === 'light')  {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else  {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  // const [style,setStyle] = useState

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      {/* <About/> */}
      <Textutils heading="Enter the text to analyze below:" mode={mode}> </Textutils>
    </div>
    </>
  );
}

export default App;