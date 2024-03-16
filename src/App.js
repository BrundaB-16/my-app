//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode]= useState('light');      //weather darkmode is enable or not

  const [alert , setAlert] = useState(null);        //alert section.

  const showAlert = (msge , type) => {
      setAlert({
        msg : msge,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1000);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Dark mode is enable','success');
  }
  else
  {
    setMode('dark');
    document.body.style.backgroundColor='#333';
    showAlert('Light mode is enable','success');
  }
}


  return (
    <>
  <Router>
  
    <Navbar a='TextUtill' mode={mode} toggleMode={toggleMode}/>
    < div className='container mt-4 col-8'>
    <Alerts alert={alert} />
    </div>
    
    <div className='container mt-5'>
    <Routes>
          <Route path="/home" element={<TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}/>
          <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;
