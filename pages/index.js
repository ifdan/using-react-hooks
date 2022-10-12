import React, {useState} from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [trackInput, setTrackInput] = useState([]);

  return <div><input 
    onChange={(e) => {
      setInputText(e.target.value);
      setTrackInput([...trackInput, e.target.value]);
    }}
    placeholder="Enter Some Text" />
    <hr/><br/>
    {
      <ul>
        {trackInput.map(input => {
          return <div>{input}</div>;
        })}
      </ul>
    }
    </div>
}

export default InputElement;