import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTodoList } from "../contexts/TodoListContext";
import "./TodoInput.css";

function TodoInput() {
  const { theme } = useTheme();
  const { todoList, setTodoList } = useTodoList();

  const [inputText, setInputText] = useState("");

  function handleAddTodo(todoValue) {
    const todoId = Math.floor(Math.random() * 100000000000);

    if (todoValue !== "") {
      setTodoList([
        ...todoList,
        { id: todoId, value: todoValue, isCompleted: false },
      ]);
    }
  }

  return (
    <div className={theme === "dark" ? "new-todo" : "new-todo light"}>
      <div className="check">
        <div
          onClick={() => {
            handleAddTodo(inputText);
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
            handleAddTodo(inputText);
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

export default TodoInput;
