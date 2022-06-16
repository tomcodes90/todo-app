import "./App.css";

import darkBackgroundDesktop from "./images/bg-desktop-dark.jpg";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import checkMark from "./images/icon-check.svg";
import removeIcon from "./images/icon-cross.svg";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      value: "Become a web developer",
      status: "to do",
    },
    {
      id: 2,
      value: "Clean the House",
      status: "to do",
    },
  ]);

  function inputHandler(e) {
    e.preventDefault();

    const todoValue = e.target.children[0].value;
    const todoId = Math.floor(Math.random() * 100000000000);

    if (todoValue !== "") {
      setTodoList([
        ...todoList,
        { id: todoId, value: todoValue, status: "active" },
      ]);
    }
  }
  function inputHandlerOnClick(e) {
    e.preventDefault();

    const todoValue = e.nativeEvent.path[2].lastChild.firstChild[0].value;
    const todoId = Math.floor(Math.random() * 100000000000);

    if (todoValue !== "") {
      setTodoList([
        ...todoList,
        { id: todoId, value: todoValue, status: "active" },
      ]);
    }
  }
  function removeTodo(e) {
    const removedTodoId = e.nativeEvent.path[3].id;

    const filteredTodoList = todoList.filter(
      (todo) => todo.id != removedTodoId
    );

    console.log(e);
    console.log(removedTodoId);
    console.log(filteredTodoList);

    setTodoList(filteredTodoList);
  }
  function clearTodoList() {
    setTodoList([]);
  }

  return (
    <>
      <div className="background-image">
        <img src={darkBackgroundDesktop} />
      </div>
      <div className="container">
        <Header sun={sun} />
        <NewTodo
          inputHandler={inputHandler}
          inputHandlerOnClick={inputHandlerOnClick}
        />
        <TodoList
          todoList={todoList}
          removeIcon={removeIcon}
          checkMark={checkMark}
          removeTodo={removeTodo}
        />
        <TodoFilter todoList={todoList} clearTodoList={clearTodoList} />
        <p> Drag and drop to reorder list</p>
      </div>
    </>
  );
}

export default App;
