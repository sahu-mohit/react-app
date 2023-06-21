import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handlUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted in UpperCase", "success");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted in LowerCase", "success");
  };

  const handleClearData = () => {
    if (text.length > 0) {
      setText("");
      props.showAlert("Text Cleard", "success");
    } else {
      props.showAlert("Text not available", "warning");
    }
  };

  const handleCopyData = () => {
    const copytext = document.getElementById("textarea");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    if (copytext.value.length > 0) {
      props.showAlert("Text Copied", "success");
    } else {
      props.showAlert("Text not available", "warning");
    }
  };

  const handleExtraSpace = () => {
    var string = "";
    var ar = text.split(" ");
    ar.forEach((element) => {
      if (element !== "") {
        string = string + " " + element;
      }
    });
    setText(string.trim());
    props.showAlert("Extra Space Removed", "success");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className={`form-check-label text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>{props.heading}</h2>
        <div className="form-floating">
          <textarea
            // className={`form-control  text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "dark" : "light"}`}
            className={`form-control  text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "dark" ? "secondary" : "light"}`}
            id="textarea"
            onChange={handleonChange}
            value={text}
            style={{height: "200px"}}
          ></textarea>
          <button
            className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} my-2 mx-2`}
            onClick={handlUpperCase}
            type="Button"
          >
            Convert to Upper Case
          </button>
          <button
            className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} my-2 mx-2`}
            onClick={handleLowerCase}
            type="Button"
          >
            Convert to Lower Case
          </button>
          <button
            className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} my-2 mx-2`}
            onClick={handleClearData}
            type="Button"
          >
            Clear Data
          </button>
          <button
            className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} my-2 mx-2`}
            onClick={handleCopyData}
            type="Button"
          >
            Copy Data
          </button>
          <button
            className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} my-2 mx-2`}
            onClick={handleExtraSpace}
            type="Button"
          >
            Remove Extra Space
          </button>
          <h1>Your text summary</h1>
          <p>
            {text.length > 0 ? text.split(" ").length : 0} Word and{" "}
            {text.length}
          </p>
          <h1>Preview</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
