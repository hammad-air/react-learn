import "./App.css";
import Proping from "./Proping";
import Textarea from "./Textarea";
import React, { useState } from 'react'
import Alert from "./Alert";

function App(props) {
const  [mode, setMode] = useState('light');  
const [alert, setalert] = useState(null);

const showAlert = (message, type) =>{
setalert({
  msg : message, 
  types : type
})
setTimeout(() => {
  setalert(null);
}, 1500);
}
const toggleMode = () =>{
if (mode === 'dark'){
  setMode ('light');
  document.body.style.backgroundColor ="white"
  showAlert("Dark Mode Has been Enable", "success");
}
else{
  setMode ('dark'); 
  document.body.style.backgroundColor ="black"
    showAlert("Light Mode Has been Enable", "success");
}
}
  return (
    <>
    <Proping name="Hammad's" mode={mode}  toggleMode={toggleMode}/>
    <div  className="container my-3">
    <Alert alert={alert}/>
      <Textarea showAlert={showAlert}  name="Word Counter" mode={mode}/>

       {/* <About/> */}
      
    </div>
    </>
  );
}

export default App;
