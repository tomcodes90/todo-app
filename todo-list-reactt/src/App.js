import "./App.css";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todoList, setTodoList] = useState([
    "Complete online JavaSCript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ]);

  function inputHandler(e) {
    const userInput = e.target.value;
    setTodoList([...todoList, userInput]);
    console.log(todoList);
  }

  console.log(todoList);

  return (
    <div className="app">
      <header className="header">
        <h1>Todo</h1>
        <p className="setLight"></p>
      </header>

      <NewTodo inputHandler={inputHandler} />
      <TodoList todoList={todoList} />
      <TodoFilter />
    </div>
  );
}

export default App;
