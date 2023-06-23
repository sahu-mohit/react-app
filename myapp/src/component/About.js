import React from "react";

export default function About(props) {
  return (
    <>
      <div className="accordion" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className={`accordion-button collapsed bg-${
                props.mode === "dark" ? "dark" : "light"
              } text-${props.mode === "dark" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Welcome to TextUtils!
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: `${
                  props.mode === "dark" ? "rgb(86 86 86)" : "white"
                }`,
                color: `${props.mode === "light" ? "black" : "white"}`,
              }}
            >
              TextUtils is an online text processing tool designed to make your
              text editing tasks easier and more efficient. Whether you're a
              writer, a student, or anyone who frequently works with text,
              TextUtils has got you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className={`accordion-button collapsed bg-${
                props.mode === "dark" ? "dark" : "light"
              } text-${props.mode === "dark" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Our Mission:
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: `${
                  props.mode === "dark" ? "rgb(86 86 86)" : "white"
                }`,
                color: `${props.mode === "light" ? "black" : "white"}`,
              }}
            >
              At TextUtils, our mission is to provide a comprehensive set of
              tools that empower users to manipulate and enhance their text
              effortlessly. We aim to simplify common text-related tasks and
              offer a user-friendly interface that caters to both basic and
              advanced text processing needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className={`accordion-button collapsed bg-${
                props.mode === "dark" ? "dark" : "light"
              } text-${props.mode === "dark" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Key Features:
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: `${
                  props.mode === "dark" ? "rgb(86 86 86)" : "white"
                }`,
                color: `${props.mode === "light" ? "black" : "white"}`,
              }}
            >
              <strong>Text Formatting:</strong> TextUtils allows you to format
              your text in various ways, including changing case (uppercase,
              lowercase, title case), removing extra spaces
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
