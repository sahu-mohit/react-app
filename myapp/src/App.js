import './App.css';
import TextForm from './component/TextForm';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import React, {useState} from 'react'

function App() {

const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type: type
  })
}

  return (
    <>
    <Navbar title="TextUtils" about="about TextUtils"/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <TextForm heading = "Enter the text here" showAlert = {showAlert}/>
    </div>
    
    </>
  );
}

export default App;
