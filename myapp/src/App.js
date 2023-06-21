// import "./App.css";
import TextForm from "./component/TextForm";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode Enable","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enable","success");
    }
  };
  
  return (
    <>
      <Navbar
        title="TextUtils"
        about="about TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm
          heading="Enter the text here"
          showAlert={showAlert}
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
