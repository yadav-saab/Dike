
import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";


function App(){
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }


  const toggleMode = ()=>{
       if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor = 'grey'
        showAlert('Dark Mode has been enabled', 'success')
        document.title = 'Dike - darkmode'
       } else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert('Light Mode has been enabled', 'success')
        document.title = 'Dike'
       }
  }
  return (
   <>
   
<Navbar title='Dike' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3"> 
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
         
          
         <TextForm showAlert={showAlert}heading='Enter the text to analyze below' mode={mode}/>
          
          

</div>
 
   </>
  );
}

export default App;
