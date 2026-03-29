import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Textutils from './Components/Textutils';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

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
  
  const toggleMode = () => {
    if (mode === 'light')  {
      setMode('dark');
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      showAlert("Dark Mode enabled","success");
      document.body.style.backgroundColor = 'grey';
    }
    else  {
      setMode('light');
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      showAlert("Dark Mode disabled","success");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router basename="/my-app">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Textutils heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert}> </Textutils>} />
          <Route path='/about' element={<About mode={mode} style={style}> </About>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;