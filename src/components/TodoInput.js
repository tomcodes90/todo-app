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
    <section className={theme === "dark" ? "new-todo" : "new-todo light"}>
      <button
        type="button"
        onClick={() => {
          handleAddTodo(inputText);
          setInputText("");
        }}
        className={theme === "dark" ? "check-mark" : "check-mark light"}
      ></button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(inputText);
          setInputText("");
        }}
        className={theme === "dark" ? "new-todo-input" : "new-todo-input light"}
      >
        <label htmlFor="input" className="screen_reader_only">
          Text field to fill with a new todo task
        </label>
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
    </section>
  );
}

export default TodoInput;
