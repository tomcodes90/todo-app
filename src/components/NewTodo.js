import { useState } from "react";
import "../App.css";

function NewTodo({ onAddTodo }) {
  const [inputText, setInputText] = useState('');
  return (
    <div className="new-todo">
      <div className="check">
        <div onClick={() => {
          onAddTodo(inputText);
          setInputText('');
        }} className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form onSubmit={(e) => {
          e.preventDefault();
          onAddTodo(inputText);
          setInputText('');
        }}>
          <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Create a new todo..." />
        </form>
      </div>
    </div>
  );
}

export default NewTodo;
