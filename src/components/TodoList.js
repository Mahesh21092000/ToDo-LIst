import React, { useState } from "react";
import './Style.css';

function TodoList(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
    }
  }

  return (
    <div className="container">
      <input
        type="text"
        className="input-todo"
        placeholder="Enter your To-Do list"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText)
          setInputText("")
        }}
      >
        +
      </button>
      <div>{inputText}</div>
    </div>
  );
}

export default TodoList;
