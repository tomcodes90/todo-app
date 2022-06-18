import { useState } from "react";
import "../App.css";

function NewTodo({ onAddTodo, theme }) {
  const [inputText, setInputText] = useState("");
  return (
    <div className={theme === "dark" ? "new-todo" : "new-todo light"}>
      <div className="check">
        <div
          onClick={() => {
            onAddTodo(inputText);
            setInputText("");
          }}
          className={theme === "dark" ? "check-mark" : "check-mark light"}
        ></div>
      </div>
      <div
        className={theme === "dark" ? "new-todo-input" : "new-todo-input light"}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAddTodo(inputText);
            setInputText("");
          }}
        >
          <input
            className={
              theme === "dark"
                ? "new-todo-input-text"
                : "new-todo-input-text light"
            }
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    </div>
  );
}

export default NewTodo;
