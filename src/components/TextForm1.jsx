import React, { useState } from "react";

export default function TextForm1(props) {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
    props.showAlert("Content Cleared", "info");
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handletoUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };

  const handletoLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Content Copied to ClipBoard", "success");
  };

  const handleSpaces = () => {
    let tmp = text.split(/[ ]+/);
    setText(tmp.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  let numwords = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            onChange={handleTextChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handletoUpperCase}
          className="btn btn-primary m-1"
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handletoLowerCase}
          className="btn btn-primary m-1"
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleSpaces}
          className="btn btn-primary m-1"
        >
          Remove Extra Space
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary m-1"
        >
          Copy
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleClear}
          className="btn btn-danger m-1"
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {numwords} words and {text.length} Characters
        </p>
        <p>{0.008 * numwords} Minutes Read</p>

        <h2>Preview</h2>

        {text.length > 0
          ? text
          : "Enter something in the TextArea above to preview it Here"}
      </div>
    </>
  );
}
