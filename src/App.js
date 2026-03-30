import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textutils from './Components/Textutils';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [prevClass, setPrevClass] = useState('bg-light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-'+prevClass);
  }
  
  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    setPrevClass(cls);
    if (cls === 'light' || cls === 'success' || cls === 'warning' || cls === 'primary')  {
      setMode(cls);
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      });
    }
    else  {
      setMode(cls);
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      });
    }
    showAlert('' + cls + ' Mode enabled',"success");
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} cls={prevClass}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Textutils heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert}> </Textutils>} />
          <Route path='/about' element={<About mode={mode} style={style}> </About>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;