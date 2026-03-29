import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Textutils from './Components/Textutils';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('dark');
  
  const toggleMode = () => {
    console.log("ToggleMode trigered");
    if (mode === 'light')  {
      setMode('dark');
    }
    else  {
      setMode('light');
    }
  }

  // const [style,setStyle] = useState

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      {/* <About/> */}
      <Textutils heading="Enter the text to analyze below:"> </Textutils>
    </div>
    </>
  );
}

export default App;