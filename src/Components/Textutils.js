import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleOnChange = (event) => {
      setText(event.target.value);
    }
    const handleUpClick = () => {
      setText(text.toUpperCase());
      // console.log(text.toUpperCase());
    }
    const handleLowClick = () => {setText(text.toLowerCase());}

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const titleCaseWords = () => {
      let newText = text.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
      setText(newText);
    }

    return (
      <>
        <div className='container'>
          <h3>{props.heading}</h3>
          <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="5"></textarea>
          </div>
          <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary ms-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary ms-1" onClick={titleCaseWords}>Capitalize Words</button>
        </div>
        <div className="container">
          <h6>Your Text Summary</h6>
          <p>{text.trim().split(" ").length} words and {text.length} characters</p>
        </div>
      </>
    );
}