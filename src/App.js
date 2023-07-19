import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';





function App() {
  const [mode,setMode]= useState('light');//whether dark mode is enabled or not
  const [alert,setalert]= useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
      },1500);
    
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#22173d';
      showAlert("darkmode has been enabled","success");
      document.title='Textutils-Darkmode';
    //  setInterval(() => {
      //  document.title='Textutils is amazing';
    //},2000);
    //setInterval(() => {
     // document.title='Textutils is amazing';
  //},1500);
  }

    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("lightmode has been enabled","success");

    }

  }
  return (
    <>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading ="Enter text to analyze" mode={mode}/> 

 </div> 
 </>
  );
}

export default App;
