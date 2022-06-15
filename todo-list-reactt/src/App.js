import "./App.css";
import darkBackgroundDesktop from "./images/bg-desktop-dark.jpg";
import sun from "./images/icon-sun.svg";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      value: "Become a web developer",
    },
    {
      id: 2,
      value: "Clean the House",
    },
  ]);

  function inputHandler(e) {
    e.preventDefault();
    const todoValue = e.target.value;
    const todoId = Math.floor(Math.random() * 100);
    if (todoValue.length > 0) {
      setTodoList([...todoList, { id: todoId, value: todoValue }]);
    }
  }

  console.log(todoList);

  return (
    <>
      <div className="background-image">
        <img src={darkBackgroundDesktop} />
      </div>
      <div className="container">
        <header className="header">
          <div className="title">Todo</div>
          <div className="theme">
            <img src={sun} />
          </div>
        </header>
        <NewTodo />
      </div>
    </>
  );
}

export default App;
