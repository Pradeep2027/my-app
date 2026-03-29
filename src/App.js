import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
// import Textutils from './Components/Textutils';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  
  const toggleMode = () => {
    console.log("ToggleMode trigered");
    if (mode === 'light')  {
      setMode('dark');
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      document.body.style.backgroundColor = 'grey';
    }
    else  {
      setMode('light');
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      document.body.style.backgroundColor = 'white';
    }
  }

  // const [style,setStyle] = useState

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <About mode={mode} style={style}> </About>
      {/* <Textutils heading="Enter the text to analyze below:" mode={mode}> </Textutils> */}
    </div>
    </>
  );
}

export default App;